import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Home, MapPin, Ruler, Bed, Bath, Building2, Calendar, Mail, Phone, Download, FileText } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { HouseCarousel } from "../components/HouseCarousel";
import { parseFrontmatterProject, FrontmatterProject } from "../utils/parseMarkdown";
import { projectsById } from "../utils/projectsData";

interface FrontmatterProjectPageProps {
  project: FrontmatterProject;
}

export function FrontmatterProjectDetailPage({ project }: FrontmatterProjectPageProps) {
  // Get the full project object to access homeDesigns
  const fullProject = projectsById[project.id];
  // Find gallery section
  const gallerySection = project.sections.find(s => s.title === 'Gallery');
  const galleryImages = gallerySection 
    ? gallerySection.content.split('\n')
        .filter(line => {
          const trimmed = line.trim();
          return trimmed.startsWith('-') || trimmed.startsWith('--');
        })
        .map(line => {
          const trimmed = line.trim();
          // Handle both - and -- formats
          return trimmed.replace(/^--?\s*/, '');
        })
        .filter(path => path.length > 0 && path.startsWith('/'))
    : [];

  // Use image from frontmatter (check both image and hero_image), or fallback to first gallery image
  const heroImage = project.image || (project as any).hero_image || galleryImages[0] || '';
  
  // Get buildType from the full project object
  const buildType = fullProject?.buildType || 'custom';

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Link 
          to={buildType === 'production' ? '/projects/production' : '/projects/custom'}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {buildType === 'production' ? 'Production' : 'Custom'} Projects
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full flex items-center gap-1">
                    <Home className="w-3 h-3" />
                    {project.property_type}
                  </span>
                  {project.location && (
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </span>
                  )}
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {project.status}
                  </span>
                </div>
                <h1 className="text-5xl text-foreground mb-6">{project.title}</h1>
                {project.content && (
                  <p className="text-xl text-muted-foreground mb-8">
                    {project.content.split('\n').find(line => line.trim() && !line.startsWith('#')) || ''}
                  </p>
                )}
                
                {/* Property Specs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {project.square_feet > 0 && (
                    <div className="flex items-center gap-2">
                      <Ruler className="w-5 h-5 text-accent" />
                      <div>
                        <div className="text-2xl font-bold text-foreground">{project.square_feet.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">sq ft</div>
                      </div>
                    </div>
                  )}
                  {project.bedrooms > 0 && (
                    <div className="flex items-center gap-2">
                      <Bed className="w-5 h-5 text-accent" />
                      <div>
                        <div className="text-2xl font-bold text-foreground">{project.bedrooms}</div>
                        <div className="text-sm text-muted-foreground">Bedrooms</div>
                      </div>
                    </div>
                  )}
                  {project.bathrooms > 0 && (
                    <div className="flex items-center gap-2">
                      <Bath className="w-5 h-5 text-accent" />
                      <div>
                        <div className="text-2xl font-bold text-foreground">{project.bathrooms}</div>
                        <div className="text-sm text-muted-foreground">Bathrooms</div>
                      </div>
                    </div>
                  )}
                  {project.builder && (
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-accent" />
                      <div>
                        <div className="text-sm font-bold text-foreground">{project.builder}</div>
                        <div className="text-sm text-muted-foreground">Builder</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {heroImage && (
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-4 border-accent">
                  <ImageWithFallback
                    src={heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PDF Packet Section */}
      {project.pdf_packet && (
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-card border-2 border-accent rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg">
                    <FileText className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-3xl text-foreground mb-2">Project Portfolio</h2>
                    <p className="text-muted-foreground">
                      View our detailed project portfolio with design concepts, construction details, and project timeline.
                    </p>
                  </div>
                </div>
                
                {/* Download Button */}
                <div className="text-center">
                  <a
                    href={project.pdf_packet.startsWith('http') ? project.pdf_packet : `${window.location.origin}${project.pdf_packet}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download Project Portfolio (PDF)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Home Designs Carousel - for production projects */}
      {fullProject?.homeDesigns && fullProject.homeDesigns.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl text-foreground mb-12 text-center">Available Home Designs</h2>
              <HouseCarousel homeDesigns={fullProject.homeDesigns} />
            </div>
          </div>
        </section>
      )}

      {/* Content Sections */}
      {project.sections.map((section, index) => {
        // Skip gallery section (handled separately), home designs (handled above), and title sections
        if (section.title === 'Gallery' || 
            section.title === 'Home Designs' ||
            section.title === 'Thoughtfully Designed Homes' ||
            section.title === 'Available Home Designs' ||
            section.title.includes('Luxury Lakefront Living') ||
            section.title.includes('Modern Desert Living')) {
          return null;
        }

        // Skip if it's just the main title
        if (section.title === project.title) {
          return null;
        }

        const content = section.content.trim();
        if (!content) return null;

        // Check if section has subsections (### headings)
        const lines = content.split('\n');
        const subsections: Array<{ title: string; content: string; startIndex: number; endIndex: number }> = [];
        let currentSubsection: { title: string; content: string; startIndex: number } | null = null;

        lines.forEach((line, index) => {
          if (line.startsWith('### ')) {
            if (currentSubsection) {
              // Close previous subsection
              subsections.push({
                ...currentSubsection,
                endIndex: index - 1
              });
            }
            currentSubsection = {
              title: line.replace('### ', '').trim(),
              content: '',
              startIndex: index
            };
          } else if (currentSubsection) {
            currentSubsection.content += (currentSubsection.content ? '\n' : '') + line;
          }
        });
        if (currentSubsection) {
          subsections.push({
            ...currentSubsection,
            endIndex: lines.length - 1
          });
        }

        // Filter out subsection content from mainContent
        const mainContent = subsections.length > 0 
          ? lines
              .map((line, index) => {
                // Check if this line is part of any subsection
                const isInSubsection = subsections.some(sub => 
                  index >= sub.startIndex && index <= sub.endIndex
                );
                return isInSubsection ? null : line;
              })
              .filter(line => line !== null)
              .join('\n')
              .trim()
          : content;

        return (
        <section 
          key={index} 
          className={index % 2 === 0 ? 'py-12' : 'py-12 bg-muted/50'}
        >
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl text-foreground mb-8">{section.title}</h2>
                
                {mainContent && (() => {
                  // Parse content into blocks (paragraphs, lists, and iframes)
                  const lines = mainContent.split('\n');
                  const blocks: Array<{ type: 'paragraph' | 'list' | 'iframe'; content: string }> = [];
                  let currentBlock: { type: 'paragraph' | 'list' | 'iframe'; content: string } | null = null;
                  
                  for (const line of lines) {
                    const trimmed = line.trim();
                    const isBullet = trimmed.startsWith('-') || trimmed.startsWith('*');
                    const isIframe = trimmed.startsWith('<iframe') && trimmed.includes('</iframe>');
                    
                    if (isIframe) {
                      // Save current block if exists
                      if (currentBlock && currentBlock.content.trim()) {
                        blocks.push(currentBlock);
                        currentBlock = null;
                      }
                      // Add iframe as its own block
                      blocks.push({ type: 'iframe', content: trimmed });
                    } else if (isBullet) {
                      // Start or continue a list block
                      if (currentBlock?.type === 'list') {
                        currentBlock.content += '\n' + line;
                      } else {
                        // Save previous paragraph block if exists
                        if (currentBlock && currentBlock.type === 'paragraph' && currentBlock.content.trim()) {
                          blocks.push(currentBlock);
                        }
                        currentBlock = { type: 'list', content: line };
                      }
                    } else if (trimmed === '') {
                      // Empty line - end current block
                      if (currentBlock && currentBlock.content.trim()) {
                        blocks.push(currentBlock);
                        currentBlock = null;
                      }
                    } else {
                      // Regular text line
                      if (currentBlock?.type === 'list') {
                        // End list, start paragraph
                        if (currentBlock.content.trim()) {
                          blocks.push(currentBlock);
                        }
                        currentBlock = { type: 'paragraph', content: line };
                      } else if (currentBlock?.type === 'paragraph') {
                        currentBlock.content += '\n' + line;
                      } else {
                        currentBlock = { type: 'paragraph', content: line };
                      }
                    }
                  }
                  
                  // Add final block
                  if (currentBlock && currentBlock.content.trim()) {
                    blocks.push(currentBlock);
                  }
                  
                  return (
                    <div className="prose prose-lg max-w-none text-muted-foreground">
                      {blocks.map((block, bIndex) => {
                        if (block.type === 'iframe') {
                          // Render iframe embed
                          return (
                            <div 
                              key={bIndex} 
                              className="mb-6 rounded-xl overflow-hidden"
                              dangerouslySetInnerHTML={{ __html: block.content }}
                            />
                          );
                        } else if (block.type === 'list') {
                          // Render bullet list
                          const items = block.content.split('\n')
                            .filter(line => {
                              const trimmed = line.trim();
                              return trimmed.startsWith('-') || trimmed.startsWith('*');
                            })
                            .map(line => {
                              // Remove bullet marker and trim
                              return line.replace(/^[-*]\s*/, '').trim();
                            })
                            .filter(item => item.length > 0);
                          
                          return (
                            <ul key={bIndex} className="list-disc list-inside space-y-2 mb-6 ml-4">
                              {items.map((item, iIndex) => {
                                // Render bold text
                                const parts = item.split(/(\*\*[^*]+\*\*)/g);
                                return (
                                  <li key={iIndex} className="text-foreground">
                                    {parts.map((part, partIndex) => {
                                      if (part.startsWith('**') && part.endsWith('**')) {
                                        return <strong key={partIndex} className="font-semibold">{part.slice(2, -2)}</strong>;
                                      }
                                      return <span key={partIndex}>{part}</span>;
                                    })}
                                  </li>
                                );
                              })}
                            </ul>
                          );
                        } else {
                          // Render paragraph with bold text support
                          const parts = block.content.trim().split(/(\*\*[^*]+\*\*)/g);
                          return (
                            <p key={bIndex} className="mb-6 leading-relaxed text-foreground">
                              {parts.map((part, partIndex) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                  return <strong key={partIndex} className="font-semibold">{part.slice(2, -2)}</strong>;
                                }
                                return <span key={partIndex}>{part}</span>;
                              })}
                            </p>
                          );
                        }
                      })}
                    </div>
                  );
                })()}

                {subsections.length > 0 && (
                  <div className="mt-8 space-y-8">
                    {subsections.map((subsection, subIndex) => {
                      // Parse subsection content into blocks (paragraphs, lists, and iframes)
                      const subLines = subsection.content.split('\n');
                      const subBlocks: Array<{ type: 'paragraph' | 'list' | 'iframe'; content: string }> = [];
                      let currentSubBlock: { type: 'paragraph' | 'list' | 'iframe'; content: string } | null = null;
                      
                      for (const line of subLines) {
                        const trimmed = line.trim();
                        const isBullet = trimmed.startsWith('-') || trimmed.startsWith('*');
                        const isIframe = trimmed.startsWith('<iframe') && trimmed.includes('</iframe>');
                        
                        if (isIframe) {
                          // Save current block if exists
                          if (currentSubBlock && currentSubBlock.content.trim()) {
                            subBlocks.push(currentSubBlock);
                            currentSubBlock = null;
                          }
                          // Add iframe as its own block
                          subBlocks.push({ type: 'iframe', content: trimmed });
                        } else if (isBullet) {
                          // Start or continue a list block
                          if (currentSubBlock?.type === 'list') {
                            currentSubBlock.content += '\n' + line;
                          } else {
                            // Save previous paragraph block if exists
                            if (currentSubBlock && currentSubBlock.type === 'paragraph' && currentSubBlock.content.trim()) {
                              subBlocks.push(currentSubBlock);
                            }
                            currentSubBlock = { type: 'list', content: line };
                          }
                        } else if (trimmed === '') {
                          // Empty line - end current block
                          if (currentSubBlock && currentSubBlock.content.trim()) {
                            subBlocks.push(currentSubBlock);
                            currentSubBlock = null;
                          }
                        } else {
                          // Regular text line
                          if (currentSubBlock?.type === 'list') {
                            // End list, start paragraph
                            if (currentSubBlock.content.trim()) {
                              subBlocks.push(currentSubBlock);
                            }
                            currentSubBlock = { type: 'paragraph', content: line };
                          } else if (currentSubBlock?.type === 'paragraph') {
                            currentSubBlock.content += '\n' + line;
                          } else {
                            currentSubBlock = { type: 'paragraph', content: line };
                          }
                        }
                      }
                      
                      // Add final block
                      if (currentSubBlock && currentSubBlock.content.trim()) {
                        subBlocks.push(currentSubBlock);
                      }
                      
                      return (
                        <div key={subIndex}>
                          <h3 className="text-2xl text-foreground mb-4">{subsection.title}</h3>
                          <div className="prose prose-lg max-w-none text-muted-foreground">
                            {subBlocks.map((block, bIndex) => {
                              if (block.type === 'iframe') {
                                // Render iframe embed
                                return (
                                  <div 
                                    key={bIndex} 
                                    className="mb-6 rounded-xl overflow-hidden"
                                    dangerouslySetInnerHTML={{ __html: block.content }}
                                  />
                                );
                              } else if (block.type === 'list') {
                                // Render bullet list
                                const items = block.content.split('\n')
                                  .filter(line => {
                                    const trimmed = line.trim();
                                    return trimmed.startsWith('-') || trimmed.startsWith('*');
                                  })
                                  .map(line => {
                                    // Remove bullet marker and trim
                                    return line.replace(/^[-*]\s*/, '').trim();
                                  })
                                  .filter(item => item.length > 0);
                                
                                return (
                                  <ul key={bIndex} className="list-disc list-inside space-y-2 mb-6 ml-4">
                                    {items.map((item, iIndex) => {
                                      // Render bold text
                                      const parts = item.split(/(\*\*[^*]+\*\*)/g);
                                      return (
                                        <li key={iIndex} className="text-foreground">
                                          {parts.map((part, partIndex) => {
                                            if (part.startsWith('**') && part.endsWith('**')) {
                                              return <strong key={partIndex} className="font-semibold">{part.slice(2, -2)}</strong>;
                                            }
                                            return <span key={partIndex}>{part}</span>;
                                          })}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                );
                              } else {
                                // Render paragraph with bold text support
                                const parts = block.content.trim().split(/(\*\*[^*]+\*\*)/g);
                                return (
                                  <p key={bIndex} className="mb-6 leading-relaxed text-foreground">
                                    {parts.map((part, partIndex) => {
                                      if (part.startsWith('**') && part.endsWith('**')) {
                                        return <strong key={partIndex} className="font-semibold">{part.slice(2, -2)}</strong>;
                                      }
                                      return <span key={partIndex}>{part}</span>;
                                    })}
                                  </p>
                                );
                              }
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* Gallery Section - Grid View */}
      {galleryImages.length > 0 && (
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl text-foreground mb-12 text-center">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((imagePath, index) => (
                  <div
                    key={index}
                    className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg border-2 border-accent hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                  >
                    <ImageWithFallback
                      src={imagePath}
                      alt={`${project.title} - Gallery Image ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border-2 border-accent rounded-xl p-8">
              <h2 className="text-3xl text-foreground mb-6">Schedule a Private Showing</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Interested in learning more about {project.title}?
              </p>
              <p className="text-muted-foreground mb-6">
                Contact {project.builder || 'Boilerline Design Co.'} to schedule a private tour or request additional information.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <a 
                  href={`mailto:info@boilerlinedesign.co`}
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
                <a 
                  href="tel:+1234567890"
                  className="inline-flex items-center gap-2 border-2 border-accent text-foreground px-6 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
