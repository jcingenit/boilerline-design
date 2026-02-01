import React from "react";
import { useParams } from "react-router-dom";
import { ProductionProjectDetailPage } from "./ProductionProjectDetailPage";
import { CustomProjectDetailPage } from "./CustomProjectDetailPage";
import { FrontmatterProjectDetailPage } from "./FrontmatterProjectDetailPage";
import { projectsById } from "../utils/projectsData";

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  
  // Debug logging
  console.log('🚪 ProjectDetailPage - URL ID:', id);
  console.log('🚪 Available IDs in projectsById:', Object.keys(projectsById));
  
  // Get the project by ID
  const project = id ? projectsById[id] : null;
  
  console.log('🚪 Project found:', project ? project.title : 'NULL');
  if (project) {
    console.log('🚪 Project buildType:', project.buildType);
    console.log('🚪 Project has gallery:', !!project.gallery, 'Length:', project.gallery?.length);
  }
  
  if (!project) {
    console.log('❌ Project not found for ID:', id);
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-foreground mb-4">Project Not Found</h1>
          <p className="text-muted-foreground">The project you're looking for doesn't exist.</p>
          <p className="text-muted-foreground mt-2">ID: {id}</p>
        </div>
      </div>
    );
  }

  // Route to appropriate component based on project type
  if (project.isFrontmatter && project.frontmatterProject) {
    console.log('🚪 Routing to: FrontmatterProjectDetailPage');
    return <FrontmatterProjectDetailPage project={project.frontmatterProject} />;
  }
  
  console.log('🚪 Routing to:', project.buildType === 'production' ? 'ProductionProjectDetailPage' : 'CustomProjectDetailPage');
  if (project.buildType === 'production') {
    return <ProductionProjectDetailPage />;
  } else {
    return <CustomProjectDetailPage />;
  }
}