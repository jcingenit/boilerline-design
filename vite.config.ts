
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';
  import { readFileSync, existsSync } from 'fs';
  import { resolve } from 'path';

  // Plugin to ensure static files are served before SPA routing
  // This intercepts requests for static files and serves them directly,
  // preventing React Router from catching them client-side
  function staticFileMiddleware() {
    return {
      name: 'static-files-first',
      configureServer(server) {
        // Add middleware that runs early to check for static files in public/
        // This ensures static files are served directly before any SPA fallback
        server.middlewares.use((req, res, next) => {
          const url = req.url || '';
          
          // Only handle requests that look like static files
          const staticExtensions = ['.pdf', '.jpg', '.jpeg', '.png', '.gif', '.svg', '.ico', '.webp', '.css', '.js', '.map', '.woff', '.woff2', '.ttf', '.eot'];
          const isStaticFile = staticExtensions.some(ext => url.toLowerCase().endsWith(ext));
          
          // Only intercept static files (skip Vite internal paths)
          if (isStaticFile && !url.includes('/src/') && !url.includes('/node_modules/') && !url.startsWith('/@')) {
            // Try to serve from public directory
            const urlWithoutSlash = url.startsWith('/') ? url.slice(1) : url;
            const publicPath = resolve(__dirname, 'public', urlWithoutSlash);
            
            if (existsSync(publicPath)) {
              try {
                const file = readFileSync(publicPath);
                const ext = path.extname(url).toLowerCase();
                
                // Set appropriate content type
                const contentTypes: Record<string, string> = {
                  '.pdf': 'application/pdf',
                  '.jpg': 'image/jpeg',
                  '.jpeg': 'image/jpeg',
                  '.png': 'image/png',
                  '.gif': 'image/gif',
                  '.svg': 'image/svg+xml',
                  '.ico': 'image/x-icon',
                  '.webp': 'image/webp',
                  '.css': 'text/css',
                  '.js': 'application/javascript',
                  '.map': 'application/json',
                  '.woff': 'font/woff',
                  '.woff2': 'font/woff2',
                  '.ttf': 'font/ttf',
                  '.eot': 'application/vnd.ms-fontobject',
                };
                
                res.setHeader('Content-Type', contentTypes[ext] || 'application/octet-stream');
                res.setHeader('Content-Length', file.length.toString());
                res.setHeader('Cache-Control', 'public, max-age=31536000');
                res.statusCode = 200;
                res.end(file);
                return; // Don't call next() - we've handled the request
              } catch (error) {
                console.error('Error serving static file:', error);
                // Fall through to next middleware on error
              }
            }
          }
          
          // Continue to next middleware (Vite's default handling)
          next();
        });
      },
    };
  }

  export default defineConfig({
    plugins: [react(), staticFileMiddleware()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'vaul@1.1.2': 'vaul',
        'sonner@2.0.3': 'sonner',
        'recharts@2.15.2': 'recharts',
        'react-resizable-panels@2.1.7': 'react-resizable-panels',
        'react-hook-form@7.55.0': 'react-hook-form',
        'react-day-picker@8.10.1': 'react-day-picker',
        'next-themes@0.4.6': 'next-themes',
        'lucide-react@0.487.0': 'lucide-react',
        'input-otp@1.4.2': 'input-otp',
        'embla-carousel-react@8.6.0': 'embla-carousel-react',
        'cmdk@1.1.1': 'cmdk',
        'class-variance-authority@0.7.1': 'class-variance-authority',
        '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
        '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
        '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
        '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
        '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
        '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
        '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
        '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
        '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
        '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
        '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
        '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
        '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
        '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
        '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
        '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
        '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
        '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
        '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
        '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
        '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
        '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
        '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
        '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
        '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
      // Ensure static files are served before SPA fallback
      // This prevents React Router from intercepting static asset requests
      middlewareMode: false,
      fs: {
        strict: false,
      },
    },
    // Ensure public files are properly handled
    publicDir: 'public',
  });