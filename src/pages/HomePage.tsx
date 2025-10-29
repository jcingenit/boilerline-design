import React from "react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { FeaturedProject } from "../components/FeaturedProject";
import { Stats } from "../components/Stats";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { CTA } from "../components/CTA";
import { Button } from "../components/ui/button";
import { parseHero, parseStats, parseAbout, parseValues, parseCTA } from "../utils/parseMarkdown";
import { allProjects } from "../utils/projectsData";

import { heroContent } from "../content/data/hero";
import { statsContent } from "../content/data/stats";
import { aboutContent } from "../content/data/about";
import { valuesContent } from "../content/data/values";
import { ctaContent } from "../content/data/cta";

export function HomePage() {
  const heroData = parseHero(heroContent);
  const statsData = parseStats(statsContent);
  const aboutData = parseAbout(aboutContent);
  const valuesData = parseValues(valuesContent);
  const ctaData = parseCTA(ctaContent);

  // Determine the most recent project based on numeric year (fallback to 0)
  const latestProject = [...allProjects].sort((a, b) => {
    const ay = parseInt(a.year, 10) || 0;
    const by = parseInt(b.year, 10) || 0;
    return by - ay;
  })[0];

  // Normalize highlights from features (strip **bold** and take the title before colon)
  const latestHighlights = (latestProject?.features || []).slice(0, 4).map((feature) => {
    const parts = feature.split(":");
    const rawTitle = (parts[0] || "");
    return rawTitle.replace(/^\*\*|\*\*$/g, '').trim() || feature;
  });

  // Convert project data to the format expected by the Projects component
  const projectsForDisplay = allProjects.map(project => ({
    title: project.title,
    description: project.description || project.overview,
    status: project.status,
    year: project.year,
    imageUrl: project.imageUrl,
    buildType: project.buildType
  }));


  return (
    <>
      <Hero
        title={heroData.title}
        description={heroData.description}
        imageUrl="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
      />
      
      {latestProject && (
        <FeaturedProject
          title={latestProject.title}
          description={latestProject.description || latestProject.overview}
          year={latestProject.year}
          teamSize={latestProject.specifications?.["Team Size"] || ""}
          status={latestProject.status}
          imageUrl={latestProject.imageUrl}
          highlights={latestHighlights}
          projectId={latestProject.id}
        />
      )}
      
      <Stats stats={statsData} />
      
      <About
        title={aboutData.title}
        subtitle={aboutData.subtitle}
        values={valuesData}
      />
      
      <Projects projects={projectsForDisplay.slice(0, 5)} />
      
      
      <CTA
        title={ctaData.title}
        description={ctaData.description}
      />
    </>
  );
}