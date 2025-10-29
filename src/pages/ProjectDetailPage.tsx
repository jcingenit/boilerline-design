import React from "react";
import { useParams } from "react-router-dom";
import { ProductionProjectDetailPage } from "./ProductionProjectDetailPage";
import { CustomProjectDetailPage } from "./CustomProjectDetailPage";
import { projectsById } from "../utils/projectsData";

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  
  // Get the project by ID
  const project = id ? projectsById[id] : null;
  
  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-foreground mb-4">Project Not Found</h1>
          <p className="text-muted-foreground">The project you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  // Route to appropriate component based on build type
  if (project.buildType === 'production') {
    return <ProductionProjectDetailPage />;
  } else {
    return <CustomProjectDetailPage />;
  }
}