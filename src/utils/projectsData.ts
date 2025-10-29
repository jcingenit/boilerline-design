import { parseProjectDetail, Project } from "./parseMarkdown";

// Dynamic import function that loads all markdown files from the projects folder
export async function loadProjects(): Promise<Project[]> {
  try {
    // Use Vite's import.meta.glob to dynamically import all markdown files
    const projectModules = (import.meta as any).glob('../content/projects/*.md', { 
      as: 'raw',
      eager: true 
    });

    const projects: Project[] = [];

    for (const [path, content] of Object.entries(projectModules)) {
      try {
        // Skip template file and README
        if (path.includes('PROJECT_TEMPLATE') || path.includes('README')) continue;
        
        // Extract filename from path for better error reporting
        const filename = path.split('/').pop()?.replace('.md', '') || 'unknown';
        
        if (typeof content === 'string') {
          const project = parseProjectDetail(content);
          projects.push(project);
          console.log(`✅ Loaded project: ${project.title} (${filename})`);
        } else {
          console.warn(`⚠️ Invalid content for project: ${filename}`);
        }
      } catch (error) {
        console.error(`❌ Error loading project from ${path}:`, error);
      }
    }

    // Filter out invisible projects and template files
    const visibleProjects = projects.filter(project => 
      project.visible === true && 
      !project.title.toLowerCase().includes('template') &&
      !project.title.toLowerCase().includes('project name')
    );

    // Sort projects by year (newest first)
    visibleProjects.sort((a, b) => {
      const yearA = parseInt(a.year.split('-')[0]) || 0;
      const yearB = parseInt(b.year.split('-')[0]) || 0;
      return yearB - yearA;
    });

    console.log(`🎉 Successfully loaded ${visibleProjects.length} visible projects (${projects.length - visibleProjects.length} hidden)`);
    return visibleProjects;
  } catch (error) {
    console.error('❌ Error loading projects:', error);
    return [];
  }
}

// Synchronous access to projects (loaded at build time)
let cachedProjects: Project[] | null = null;

// Initialize projects synchronously for immediate access
try {
  const projectModules = (import.meta as any).glob('../content/projects/*.md', { 
    as: 'raw',
    eager: true 
  });

  const projects: Project[] = [];

  for (const [path, content] of Object.entries(projectModules)) {
    try {
      // Skip template file
      if (path.includes('PROJECT_TEMPLATE')) continue;
      
      if (typeof content === 'string') {
        const project = parseProjectDetail(content);
        projects.push(project);
      }
    } catch (error) {
      console.error(`Error loading project from ${path}:`, error);
    }
  }

  // Filter out invisible projects and template files
  const visibleProjects = projects.filter(project => 
    project.visible === true && 
    !project.title.toLowerCase().includes('template') &&
    !project.title.toLowerCase().includes('project name')
  );

  // Sort projects by year (newest first)
  visibleProjects.sort((a, b) => {
    const yearA = parseInt(a.year.split('-')[0]) || 0;
    const yearB = parseInt(b.year.split('-')[0]) || 0;
    return yearB - yearA;
  });

  cachedProjects = visibleProjects;
  console.log(`🎉 Successfully loaded ${visibleProjects.length} visible projects (${projects.length - visibleProjects.length} hidden) synchronously`);
} catch (error) {
  console.error('❌ Error loading projects synchronously:', error);
  cachedProjects = [];
}

export const allProjects = cachedProjects || [];

// Export individual projects by ID for easy access
export const projectsById: Record<string, Project> = {};
allProjects.forEach(project => {
  projectsById[project.id] = project;
});

// Query functions for build types
export function getProjectsByBuildType(buildType: 'custom' | 'production'): Project[] {
  return allProjects.filter(project => project.buildType === buildType);
}

export function getCustomProjects(): Project[] {
  return getProjectsByBuildType('custom');
}

export function getProductionProjects(): Project[] {
  return getProjectsByBuildType('production');
}

export function getProjectsByStatus(status: string): Project[] {
  return allProjects.filter(project => project.status === status);
}

export function getProjectsByYear(year: string): Project[] {
  return allProjects.filter(project => 
    project.year === year || 
    project.year.includes(year) ||
    project.yearRange?.includes(year)
  );
}

export function searchProjects(query: string): Project[] {
  const lowercaseQuery = query.toLowerCase();
  return allProjects.filter(project => 
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.description.toLowerCase().includes(lowercaseQuery) ||
    project.overview.toLowerCase().includes(lowercaseQuery) ||
    project.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
  );
}

// Helper function to get all projects including hidden ones (for admin purposes)
export function getAllProjectsIncludingHidden(): Project[] {
  try {
    const projectModules = (import.meta as any).glob('../content/projects/*.md', { 
      as: 'raw',
      eager: true 
    });

    const projects: Project[] = [];

    for (const [path, content] of Object.entries(projectModules)) {
      try {
        // Skip template file and README
        if (path.includes('PROJECT_TEMPLATE') || path.includes('README')) continue;
        
        if (typeof content === 'string') {
          const project = parseProjectDetail(content);
          projects.push(project);
        }
      } catch (error) {
        console.error(`Error loading project from ${path}:`, error);
      }
    }

    // Sort projects by year (newest first)
    projects.sort((a, b) => {
      const yearA = parseInt(a.year.split('-')[0]) || 0;
      const yearB = parseInt(b.year.split('-')[0]) || 0;
      return yearB - yearA;
    });

    return projects;
  } catch (error) {
    console.error('❌ Error loading all projects:', error);
    return [];
  }
}