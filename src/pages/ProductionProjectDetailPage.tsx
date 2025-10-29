import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Award, Calendar, CheckCircle, Trophy, Users, DollarSign, Zap, Download, FileText } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { HouseCarousel } from "../components/HouseCarousel";
import { projectsById } from "../utils/projectsData";

export function ProductionProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  
  // Get the project by ID
  const project = id ? projectsById[id] : null;
  
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
          to="/projects/production" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Production Projects
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
                    {project.status.includes('Winner') && <Trophy className="w-3 h-3" />}
                    {project.status.includes('Finalist') && <Award className="w-3 h-3" />}
                    {project.status}
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

       {/* Home Designs Carousel */}
      {project.homeDesigns && project.homeDesigns.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl text-foreground mb-12 text-center">Available Home Designs</h2>
              <HouseCarousel homeDesigns={project.homeDesigns} />
            </div>
          </div>
        </section>
      )}

      {/* Production Stats */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl text-foreground mb-12 text-center">Project Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(project.specifications || {}).map(([key, value], index) => (
                <div key={index} className="bg-card border-2 border-accent rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-accent mb-2">
                    {value}
                  </div>
                  <div className="text-muted-foreground">{key}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      {project.description && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl text-foreground mb-8">About This Development</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description || project.overview}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Key Features */}
      {project.features.length > 0 && (
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl text-foreground mb-12 text-center">Development Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.features.map((feature, index) => {
                  // Extract feature title and description
                  const parts = feature.split(':');
                  const rawTitle = parts[0] || '';
                  // Remove markdown bold markers
                  const title = rawTitle.replace(/^\*\*|\*\*$/g, '').trim();
                  const description = parts.slice(1).join(':').trim();
                  
                  return (
                    <div key={index} className="bg-card text-primary-foreground p-6 rounded-xl border-2 border-transparent hover:border-accent transition-all">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
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

      {/* Sustainability */}
      {project.sustainability && project.sustainability.length > 0 && (
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl text-foreground mb-12 text-center">Sustainability Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.sustainability.map((item, index) => {
                  // Extract feature title and description
                  const parts = item.split(':');
                  const rawTitle = parts[0] || '';
                  const title = rawTitle.replace(/^\*\*|\*\*$/g, '').trim();
                  const description = parts.slice(1).join(':').trim();
                  
                  return (
                    <div key={index} className="bg-card text-primary-foreground p-6 rounded-xl border-2 border-transparent hover:border-accent transition-all">
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
              <h2 className="text-3xl text-foreground mb-8">Warranty & Quality Assurance</h2>
              <div className="bg-gradient-to-br from-accent/10 to-transparent p-8 rounded-xl">
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
              <h2 className="text-3xl text-foreground mb-8">Awards & Recognition</h2>
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
