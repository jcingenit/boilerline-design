import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Award, Calendar, CheckCircle, Home, Users, DollarSign, Zap, Wrench, Download, FileText } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { projectsById } from "../utils/projectsData";

export function CustomProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  
  // ALWAYS log - even if project is null
  console.log('🎯 CustomProjectDetailPage RENDERED - URL ID:', id);
  console.log('🎯 All available project IDs:', Object.keys(projectsById));
  
  // Debug: Log the ID being used
  React.useEffect(() => {
    console.log('🔑 CustomProjectDetailPage - URL ID:', id);
    console.log('🔑 Available project IDs:', Object.keys(projectsById));
    if (id) {
      const foundProject = projectsById[id];
      console.log('🔑 Found project:', foundProject ? foundProject.title : 'NOT FOUND');
      if (foundProject) {
        console.log('🔑 Project has gallery:', !!foundProject.gallery, 'Length:', foundProject.gallery?.length);
      }
    }
  }, [id]);
  
  // Get the project by ID
  const project = id ? projectsById[id] : null;
  
  // Log even if project is null
  console.log('🎯 Project from projectsById:', project ? project.title : 'NULL');
  
  // Debug: Log project data
  React.useEffect(() => {
    if (project) {
      console.log('🔍 Project data:', {
        id: project.id,
        title: project.title,
        hasGallery: !!project.gallery,
        galleryLength: project.gallery?.length || 0,
        gallery: project.gallery,
        galleryType: typeof project.gallery,
        isArray: Array.isArray(project.gallery)
      });
      // Force check if gallery should render
      if (project.gallery && project.gallery.length > 0) {
        console.log('✅ Gallery should render!', project.gallery);
      } else {
        console.log('❌ Gallery will NOT render. project.gallery =', project.gallery);
      }
    }
  }, [project]);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-foreground mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-accent hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Link 
          to="/projects/custom" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Custom Projects
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full flex items-center gap-1">
                    <Home className="w-3 h-3" />
                    Custom Build
                  </span>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {project.yearRange || project.year}
                  </span>
                </div>
                <h1 className="text-5xl text-foreground mb-6">{project.title}</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {project.overview || project.description}
                </p>
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-4 border-accent">
                <ImageWithFallback
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
       </section>

       {/* PDF Packet Section */}
       {project.pdfPacket && (
         <section className="py-20 bg-muted/50">
           <div className="container mx-auto px-4">
             <div className="max-w-4xl mx-auto">
               <div className="bg-card border-2 border-accent rounded-xl p-8 text-center">
                 <div className="flex flex-col items-center gap-6">
                   <div className="p-4 rounded-lg">
                     <FileText className="w-12 h-12 text-accent" />
                   </div>
                   <div>
                     <h2 className="text-3xl text-foreground mb-4">Project Information Packet</h2>
                     <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                       Access our comprehensive project packet with detailed specifications, floor plans, development information, and all the essential details you need to understand this project. Download the PDF to view complete documentation.
                     </p>
                   </div>
                   
                   {/* Download Button */}
                   <div className="space-y-3">
                     <a
                       href={project.pdfPacket.startsWith('http') ? project.pdfPacket : `${window.location.origin}${project.pdfPacket}`}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors text-lg font-medium"
                     >
                       <Download className="w-5 h-5" />
                       Download Project Packet (PDF)
                     </a>
                     <p className="text-sm text-muted-foreground">
                       The packet will open in a new window for your convenience.
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>
       )}

      {/* Description */}
      {project.description && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl text-foreground mb-8">Project Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description || project.overview}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Specifications */}
      {Object.keys(project.specifications).length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl text-foreground mb-8">Technical Specifications</h2>
              <div className="bg-white from-accent/10 to-transparent p-8 rounded-xl border-2 border-accent">
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(project.specifications).map(([key, value]) => (
                    <div key={key}>
                      <h4 className="text-sm text-accent mb-2">{key}</h4>
                      <p className="text-lg text-foreground">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery - Simplified check */}
      {project && project.gallery && Array.isArray(project.gallery) && project.gallery.length > 0 && (
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl text-foreground mb-12 text-center">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.gallery.map((imagePath, index) => (
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

      {/* Key Features */}
      {project.features.length > 0 && (
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl text-foreground mb-12 text-center">Custom Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.features.map((feature, index) => {
                  // Extract feature title and description
                  const parts = feature.split(':');
                  const rawTitle = parts[0] || '';
                  // Remove markdown bold markers
                  const title = rawTitle.replace(/^\*\*|\*\*$/g, '').trim();
                  const description = parts.slice(1).join(':').trim();
                  
                  return (
                    <div key={index} className="bg-white text-primary-foreground p-6 rounded-xl border-2 border-transparent hover:border-accent transition-all">
                      <div className="flex items-start gap-3">
                        <Wrench className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-lg text-black mb-2">{title}</h3>
                          {description && (
                            <p className="text-sm text-black">{description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Home Designs - Custom Layout */}
      {project.homeDesigns && project.homeDesigns.length > 0 && (
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl text-foreground mb-12 text-center">Design Elements</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {project.homeDesigns.map((design, index) => (
                  <div key={index} className="bg-background p-8 rounded-xl border-2 border-accent shadow-lg">
                    <h3 className="text-2xl text-foreground mb-4">{design.name}</h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-sm text-accent font-medium">Type</span>
                        <p className="text-foreground">{design.type}</p>
                      </div>
                      <div>
                        <span className="text-sm text-accent font-medium">Size</span>
                        <p className="text-foreground">{design.sqft}</p>
                      </div>
                      <div>
                        <span className="text-sm text-accent font-medium">Bedrooms</span>
                        <p className="text-foreground">{design.bedrooms}</p>
                      </div>
                      <div>
                        <span className="text-sm text-accent font-medium">Bathrooms</span>
                        <p className="text-foreground">{design.bathrooms}</p>
                      </div>
                    </div>
                    {design.description && (
                      <p className="text-muted-foreground leading-relaxed">{design.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Sustainability */}
      {project.sustainability && project.sustainability.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl text-foreground mb-12 text-center">Sustainable Design</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.sustainability.map((item, index) => {
                  // Extract feature title and description
                  const parts = item.split(':');
                  const rawTitle = parts[0] || '';
                  const title = rawTitle.replace(/^\*\*|\*\*$/g, '').trim();
                  const description = parts.slice(1).join(':').trim();
                  
                  return (
                    <div key={index} className="bg-white p-6 rounded-xl border-2 border-transparent hover:border-accent transition-all">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-lg text-foreground mb-2">{title}</h3>
                          {description && (
                            <p className="text-sm text-muted-foreground">{description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Warranty & Quality Assurance */}
      {project.warranty && project.warranty.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl text-foreground mb-8">Quality Assurance</h2>
              <div className="bg-white from-accent/10 to-transparent p-8 rounded-xl border-2 border-accent">
                <div className="space-y-4">
                  {project.warranty.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Impact */}
      {project.impact && (
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl text-foreground mb-8">Project Impact</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.impact}
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
