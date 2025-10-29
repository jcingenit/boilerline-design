import React, { useState, useEffect, useMemo, useRef } from "react";
import { Download, AlertCircle, ExternalLink } from "lucide-react";

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
  fallbackMessage?: string;
}

export function PDFViewer({ pdfUrl, title, fallbackMessage }: PDFViewerProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  const [embedMethod, setEmbedMethod] = useState<'iframe' | 'object' | 'embed'>('iframe');
  const isLoadingRef = useRef(true);

  // Construct the URL for the PDF
  // The issue: React Router might intercept the iframe request and show a 404
  // Solution: Ensure we're using the correct path that Vite serves
  const displayUrl = useMemo(() => {
    // If it's already a full URL (http/https), use it as-is
    if (pdfUrl.startsWith('http://') || pdfUrl.startsWith('https://')) {
      return pdfUrl;
    }
    
    // Remove /public prefix if present (Vite serves public folder at root)
    const cleanUrl = pdfUrl.replace(/^\/public/, '');
    
    // Ensure it starts with / for absolute path from root
    const normalizedUrl = cleanUrl.startsWith('/') ? cleanUrl : `/${cleanUrl}`;
    
    // IMPORTANT: Vite serves files from public/ at the root during dev
    // In production, build assets go to build/ but public/ files are copied to build/ root
    // So /images/... paths should work, but React Router might intercept them
    // Use full URL to ensure the browser makes a direct HTTP request
    const fullUrl = `${window.location.origin}${normalizedUrl}`;
    
    console.log('PDFViewer - Constructed URL:', {
      original: pdfUrl,
      normalized: normalizedUrl,
      full: fullUrl,
      origin: window.location.origin
    });
    
    return fullUrl;
  }, [pdfUrl]);

  // Reset state when pdfUrl changes
  useEffect(() => {
    setHasError(false);
    setIsLoading(true);
    isLoadingRef.current = true;
    setRetryCount(0);
    setEmbedMethod('iframe');
    
    // Verify the PDF exists and is accessible BEFORE trying to load in iframe
    // This helps us catch 404 errors early
    const verifyPdf = async () => {
      try {
        console.log('PDFViewer - Verifying PDF exists at:', displayUrl);
        const response = await fetch(displayUrl, { method: 'HEAD' });
        
        console.log('PDFViewer - Fetch response:', {
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries()),
          url: response.url
        });
        
        if (!response.ok) {
          // If we get a 404, it means React Router is intercepting or file doesn't exist
          console.error('PDFViewer - PDF not accessible:', response.status, response.statusText);
          
          // Check if it's returning HTML (likely a 404 page from React Router)
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('text/html')) {
            console.error('PDFViewer - Got HTML response instead of PDF! React Router may be intercepting.');
            setHasError(true);
            setIsLoading(false);
            isLoadingRef.current = false;
            return;
          }
          
          throw new Error(`PDF not accessible: ${response.status} ${response.statusText}`);
        }
        
        // Verify content type is PDF
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/pdf')) {
          console.warn('PDFViewer - Unexpected content type:', contentType);
        }
        
        console.log('PDFViewer - PDF verified successfully, content-type:', contentType);
      } catch (error) {
        console.error('PDFViewer - Error verifying PDF:', error);
        setHasError(true);
        setIsLoading(false);
        isLoadingRef.current = false;
      }
    };

    verifyPdf();

    // Set a timeout to prevent infinite loading
    const timeoutId = setTimeout(() => {
      if (isLoadingRef.current) {
        console.warn('PDFViewer - Loading timeout, trying alternative method');
        setIsLoading(false);
        isLoadingRef.current = false;
        // Try object tag instead
        if (retryCount < 2) {
          setEmbedMethod(prev => prev === 'iframe' ? 'object' : 'embed');
          setRetryCount(prev => prev + 1);
          setIsLoading(true);
          isLoadingRef.current = true;
        } else {
          setHasError(true);
        }
      }
    }, 8000);
    
    return () => clearTimeout(timeoutId);
  }, [pdfUrl, displayUrl, retryCount]);

  const handleLoad = () => {
    setIsLoading(false);
    isLoadingRef.current = false;
    setHasError(false);
  };

  const handleError = () => {
    console.log('PDFViewer - Error loading PDF, retry count:', retryCount);
    if (retryCount < 2) {
      // Try alternative embedding methods
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        if (embedMethod === 'iframe') {
          setEmbedMethod('object');
        } else if (embedMethod === 'object') {
          setEmbedMethod('embed');
        } else {
          setEmbedMethod('iframe');
        }
        setIsLoading(true);
        isLoadingRef.current = true;
        setHasError(false);
      }, 1000);
    } else {
      setIsLoading(false);
      setHasError(true);
    }
  };

  // Debug logging
  useEffect(() => {
    console.log('PDFViewer - pdfUrl:', pdfUrl);
    console.log('PDFViewer - displayUrl:', displayUrl);
    console.log('PDFViewer - embedMethod:', embedMethod);
  }, [pdfUrl, displayUrl, embedMethod]);

  const renderPdfViewer = () => {
    const pdfSrc = `${displayUrl}#toolbar=1&navpanes=1&scrollbar=1`;
    
    switch (embedMethod) {
      case 'object':
        return (
          <object
            key={`${displayUrl}-${retryCount}-object`}
            data={pdfSrc}
            type="application/pdf"
            className="w-full h-full border-0"
            onLoad={handleLoad}
            onError={handleError}
          >
            <embed
              src={pdfSrc}
              type="application/pdf"
              className="w-full h-full"
            />
            <p className="text-center text-muted-foreground p-4">
              Your browser doesn't support PDF viewing. 
              <a href={displayUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                Click here to open the PDF
              </a>
            </p>
          </object>
        );
      case 'embed':
        return (
          <embed
            key={`${displayUrl}-${retryCount}-embed`}
            src={pdfSrc}
            type="application/pdf"
            className="w-full h-full border-0"
            onLoad={handleLoad}
            onError={handleError}
          />
        );
      case 'iframe':
      default:
        return (
          <iframe
            key={`${displayUrl}-${retryCount}-iframe`}
            src={pdfSrc}
            className="w-full h-full border-0"
            title={title}
            onLoad={handleLoad}
            onError={handleError}
            allow="fullscreen"
          />
        );
    }
  };

  return (
    <div className="w-full h-full">
      <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col">
        {!hasError && displayUrl ? (
          <div className="relative flex-1">
            {isLoading && (
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent mx-auto mb-2"></div>
                  <p className="text-sm text-muted-foreground">Loading PDF...</p>
                </div>
              </div>
            )}
            {renderPdfViewer()}
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center p-8">
              <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">PDF Preview Unavailable</h3>
              <p className="text-muted-foreground mb-4">
                {fallbackMessage || "The PDF preview couldn't be loaded. Please try one of the options below."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={displayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in New Tab
                </a>
                <a
                  href={displayUrl}
                  download
                  className="inline-flex items-center gap-2 bg-muted text-muted-foreground px-4 py-2 rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
