export interface ParsedSection {
  title: string;
  content: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: string;
  year: string;
  yearRange?: string; // For projects spanning multiple years (e.g., "2023-2024")
  imageUrl: string;
  overview: string;
  features: string[];
  specifications: Record<string, string>;
  impact: string;
  buildType: 'custom' | 'production';
  visible: boolean; // Whether the project should be displayed on the website
  sustainability?: string[];
  homeDesigns?: Array<{
    name: string;
    type: string;
    bedrooms: string;
    bathrooms: string;
    sqft: string;
    description: string;
    imageUrl?: string;
    stats?: Array<{
      label: string;
      value: string;
    }>;
  }>;
  communityHighlights?: string[];
  digitalExperience?: string[];
  warranty?: string[];
  pdfPacket?: string;
}


/**
 * Simple markdown parser that extracts sections based on ## headings
 */
export function parseMarkdown(markdown: string): ParsedSection[] {
  if (!markdown || typeof markdown !== 'string') {
    return [];
  }

  const sections: ParsedSection[] = [];
  const lines = markdown.split('\n');
  
  let currentSection: ParsedSection | null = null;
  
  for (const line of lines) {
    // Check if this is a section heading (## Title)
    if (line.startsWith('## ')) {
      // Save previous section if exists
      if (currentSection) {
        sections.push(currentSection);
      }
      // Start new section
      currentSection = {
        title: line.replace('## ', '').trim(),
        content: ''
      };
    } else if (currentSection && line.trim()) {
      // Add content to current section
      if (currentSection.content) {
        currentSection.content += '\n' + line.trim();
      } else {
        currentSection.content = line.trim();
      }
    }
  }
  
  // Don't forget the last section
  if (currentSection) {
    sections.push(currentSection);
  }
  
  return sections;
}

/**
 * Extract the main title from markdown (# Title)
 */
function extractTitle(markdown: string): string {
  const lines = markdown.split('\n');
  for (const line of lines) {
    if (line.startsWith('# ')) {
      return line.replace('# ', '').trim();
    }
  }
  return '';
}

/**
 * Extract bullet points from a section
 */
function extractBulletPoints(content: string): string[] {
  if (!content) return [];
  
  return content
    .split('\n')
    .filter(line => line.trim().startsWith('-'))
    .map(line => line.trim().replace(/^-\s*/, ''))
    .filter(item => item.length > 0);
}

/**
 * Parse a project detail markdown file
 */
export function parseProjectDetail(markdown: string): Project {
  if (!markdown || typeof markdown !== 'string') {
    throw new Error('Invalid markdown content for project');
  }

  const title = extractTitle(markdown);
  const sections = parseMarkdown(markdown);
  
  // Create a map of sections for easy access
  // Use first occurrence of each section (don't overwrite with later duplicates)
  const sectionMap: Record<string, string> = {};
  sections.forEach(section => {
    // Only set the section if it doesn't already exist (preserve first occurrence)
    if (!sectionMap[section.title]) {
      sectionMap[section.title] = section.content;
    }
  });
  
  // Extract features (bullet list)
  const features = extractBulletPoints(sectionMap['Features'] || '');
  
  // Extract specifications (key-value pairs with **Key**: Value format)
  const specifications: Record<string, string> = {};
  const specsContent = sectionMap['Specifications'] || '';
  specsContent.split('\n').forEach(line => {
    const match = line.match(/\*\*([^*]+)\*\*:\s*(.+)/);
    if (match && match[1] && match[2]) {
      specifications[match[1].trim()] = match[2].trim();
    }
  });

  // Extract sustainability features
  const sustainability = extractBulletPoints(sectionMap['Sustainability'] || '');

  // Extract home designs
  const homeDesigns: Array<{
    name: string;
    type: string;
    bedrooms: string;
    bathrooms: string;
    sqft: string;
    description: string;
    imageUrl?: string;
    stats?: Array<{
      label: string;
      value: string;
    }>;
  }> = [];
  
  const homeDesignsContent = sectionMap['Home Designs'] || '';
  if (homeDesignsContent) {
    const lines = homeDesignsContent.split('\n');
    let currentDesign: any = null;
    
    for (const line of lines) {
      if (line.startsWith('### ')) {
        // Save previous design if exists
        if (currentDesign) {
          homeDesigns.push(currentDesign);
        }
        // Start new design
        currentDesign = {
          name: line.replace('### ', '').trim(),
          type: '',
          bedrooms: '',
          bathrooms: '',
          sqft: '',
          description: '',
          imageUrl: '',
          stats: []
        };
      } else if (currentDesign && line.trim()) {
        if (line.includes('|')) {
          // Parse the format: "Ranch | 2 Bed | 2.5 Bath | 2,056 sq ft"
          const parts = line.split('|').map(p => p.trim());
          if (parts.length >= 4) {
            currentDesign.type = parts[0];
            currentDesign.bedrooms = parts[1];
            currentDesign.bathrooms = parts[2];
            currentDesign.sqft = parts[3];
          }
        } else if (line.startsWith('**Image:**')) {
          // Parse image URL
          currentDesign.imageUrl = line.replace('**Image:**', '').trim();
        } else if (line.startsWith('**Stats:**')) {
          // Parse stats in format: "**Stats:** Energy Rating: HERS 58, Garage: 2-Car, Stories: 1"
          const statsText = line.replace('**Stats:**', '').trim();
          const statsPairs = statsText.split(',').map(pair => pair.trim());
          currentDesign.stats = statsPairs.map(pair => {
            const [label, value] = pair.split(':').map(s => s.trim());
            return { label, value };
          });
        } else if (!line.startsWith('**') && !line.startsWith('###')) {
          // Description line (not a special field or heading)
          if (currentDesign.description) {
            currentDesign.description += ' ' + line.trim();
          } else {
            currentDesign.description = line.trim();
          }
        }
      }
    }
    
    // Add the last design
    if (currentDesign) {
      homeDesigns.push(currentDesign);
    }
  }

  // Extract community highlights
  const communityHighlights = extractBulletPoints(sectionMap['Community Highlights'] || '');

  // Extract digital experience
  const digitalExperience = extractBulletPoints(sectionMap['Digital Experience'] || '');

  // Extract warranty information
  const warranty = extractBulletPoints(sectionMap['Warranty & Quality Assurance'] || '');

  // Extract PDF packet link
  const pdfPacket = sectionMap['PDF Packet'] || sectionMap['PDF'] || '';

  // Extract visibility setting (defaults to true if not specified)
  const visibilityContent = sectionMap['Visible'] || sectionMap['Visibility'] || '';
  let visible = true; // Default to visible
  
  if (visibilityContent.toLowerCase().includes('false') || 
      visibilityContent.toLowerCase().includes('no') || 
      visibilityContent.toLowerCase().includes('hidden') ||
      visibilityContent.toLowerCase().includes('hide')) {
    visible = false;
  }
  
  // Generate ID from title
  const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  
  // Extract and process year information
  const yearContent = sectionMap['Year'] || '';
  let year = yearContent;
  let yearRange: string | undefined;
  
  // Check if year is in range format (e.g., "2023-2024", "2023–2024")
  if (yearContent.includes('-') || yearContent.includes('–')) {
    yearRange = yearContent;
    // Use the first year as the primary year for sorting
    year = yearContent.split(/[-–]/)[0].trim();
  }
  
  // Enhanced build type detection
  const buildTypeSection = sectionMap['Build Type'] || '';
  const competition = sectionMap['Competition'] || '';
  const status = sectionMap['Status'] || '';
  const overview = sectionMap['Overview'] || '';
  const description = sectionMap['Description'] || '';
  
  let buildType: 'custom' | 'production';
  
  // Check explicit Build Type section first
  if (buildTypeSection.toLowerCase().includes('production')) {
    buildType = 'production';
  } else if (buildTypeSection.toLowerCase().includes('custom')) {
    buildType = 'custom';
  } else {
    // Enhanced fallback logic
    const contentToCheck = `${competition} ${status} ${overview} ${description}`.toLowerCase();
    
    // Production indicators
    const productionIndicators = [
      'nahb', 'competition', 'student competition', 'award', 'winner', 'finalist',
      'production', 'community', 'development', 'residential', 'housing',
      'feasibility', 'design development', 'landmark homes', 'purdue'
    ];
    
    // Custom indicators
    const customIndicators = [
      'custom', 'bespoke', 'unique', 'one-of-a-kind', 'personal', 'individual',
      'showcase', 'demonstration', 'prototype', 'experimental'
    ];
    
    const productionScore = productionIndicators.reduce((score, indicator) => 
      score + (contentToCheck.includes(indicator) ? 1 : 0), 0
    );
    
    const customScore = customIndicators.reduce((score, indicator) => 
      score + (contentToCheck.includes(indicator) ? 1 : 0), 0
    );
    
    buildType = productionScore >= customScore ? 'production' : 'custom';
  }

  return {
    id: id || 'untitled',
    title: title || 'Untitled Project',
    description: sectionMap['Description'] || '',
    status: sectionMap['Status'] || '',
    year: year,
    yearRange: yearRange,
    imageUrl: sectionMap['Image'] || '',
    overview: sectionMap['Overview'] || '',
    features,
    specifications,
    impact: sectionMap['Impact'] || '',
    buildType,
    visible,
    sustainability: sustainability.length > 0 ? sustainability : undefined,
    homeDesigns: homeDesigns.length > 0 ? homeDesigns : undefined,
    communityHighlights: communityHighlights.length > 0 ? communityHighlights : undefined,
    digitalExperience: digitalExperience.length > 0 ? digitalExperience : undefined,
    warranty: warranty.length > 0 ? warranty : undefined,
    pdfPacket: pdfPacket || undefined
  };
}


/**
 * Parse stats markdown for homepage
 */
export function parseStats(markdown: string) {
  if (!markdown || typeof markdown !== 'string') return [];
  const sections = parseMarkdown(markdown);
  return sections.map(section => ({
    value: section.title || '',
    label: section.content || ''
  }));
}

/**
 * Parse values markdown for about page
 */
export function parseValues(markdown: string) {
  if (!markdown || typeof markdown !== 'string') return [];
  const sections = parseMarkdown(markdown);
  return sections.map(section => ({
    title: section.title || '',
    description: section.content || ''
  }));
}

/**
 * Parse projects list for homepage
 */
export function parseProjects(markdown: string) {
  if (!markdown || typeof markdown !== 'string') return [];
  const sections = parseMarkdown(markdown);
  return sections.map(section => {
    const lines = section.content.split('\n');
    const description = lines[0] || '';
    
    // Extract status and image from lines
    let status = '';
    let imageUrl = '';
    
    for (const line of lines) {
      if (line.includes('**Status:**')) {
        status = line.replace('**Status:**', '').trim();
      }
      if (line.includes('**Image:**')) {
        imageUrl = line.replace('**Image:**', '').trim();
      }
    }
    
    return {
      title: section.title || '',
      description: description || '',
      status: status || '',
      imageUrl: imageUrl || ''
    };
  });
}


/**
 * Parse hero section
 */
export function parseHero(markdown: string) {
  if (!markdown || typeof markdown !== 'string') {
    return { title: '', description: '' };
  }
  const title = extractTitle(markdown);
  const lines = markdown.split('\n').filter(line => !line.startsWith('#') && line.trim());
  const description = lines.join(' ').trim();
  
  return { title: title || '', description: description || '' };
}

/**
 * Parse about section
 */
export function parseAbout(markdown: string) {
  if (!markdown || typeof markdown !== 'string') {
    return { title: '', subtitle: '' };
  }
  const title = extractTitle(markdown);
  const lines = markdown.split('\n').filter(line => !line.startsWith('#') && line.trim());
  const subtitle = lines.join(' ').trim();
  
  return { title: title || '', subtitle: subtitle || '' };
}

/**
 * Parse CTA section
 */
export function parseCTA(markdown: string) {
  if (!markdown || typeof markdown !== 'string') {
    return { title: '', description: '' };
  }
  const title = extractTitle(markdown);
  const lines = markdown.split('\n').filter(line => !line.startsWith('#') && line.trim());
  const description = lines.join(' ').trim();
  
  return { title: title || '', description: description || '' };
}

/**
 * Parse featured project section for homepage
 */
export function parseFeaturedProject(markdown: string) {
  if (!markdown || typeof markdown !== 'string') {
    return { 
      title: '',
      description: '',
      year: '',
      teamSize: '',
      status: '',
      imageUrl: '',
      highlights: [] as string[],
      badgeText: ''
    };
  }

  const title = extractTitle(markdown);
  const sections = parseMarkdown(markdown);
  const sectionMap: Record<string, string> = {};
  sections.forEach(section => {
    sectionMap[section.title] = section.content;
  });

  const year = sectionMap['Year'] || '';
  const teamSize = sectionMap['Team Size'] || '';
  const status = sectionMap['Status'] || '';
  const imageUrl = sectionMap['Image'] || '';
  const description = sectionMap['Description'] || '';
  const highlights = extractBulletPoints(sectionMap['Highlights'] || '');

  const badgeText = title && year ? `Featured Project ${year}` : (year ? `Featured Project ${year}` : 'Featured Project');

  return {
    title: title || '',
    description,
    year,
    teamSize,
    status,
    imageUrl,
    highlights,
    badgeText
  };
}