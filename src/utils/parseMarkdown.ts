export interface ParsedSection {
  title: string;
  content: string;
}

export interface FrontmatterProject {
  id: string;
  title: string;
  slug: string;
  location: string;
  property_type: string;
  square_feet: number | string;
  bedrooms: number | string;
  bathrooms: number | string;
  builder: string;
  status: string;
  image?: string; // Hero image from frontmatter
  pdf_packet?: string; // PDF packet from frontmatter
  project?: string; // Project type: "custom" or "production"
  year?: number; // Year from frontmatter
  hero_image?: string; // Alternative image field name
  content: string; // The markdown content after frontmatter
  sections: ParsedSection[];
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
  gallery?: string[];
  // Frontmatter project support
  isFrontmatter?: boolean;
  frontmatterProject?: FrontmatterProject;
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
 * Parse frontmatter from markdown (YAML between --- delimiters)
 */
function parseFrontmatter(markdown: string): { frontmatter: Record<string, any>, content: string } {
  if (!markdown.trim().startsWith('---')) {
    return { frontmatter: {}, content: markdown };
  }

  const lines = markdown.split('\n');
  let frontmatterEnd = -1;
  let frontmatterStart = 0;

  // Find the first ---
  if (lines[0].trim() === '---') {
    frontmatterStart = 1;
    // Find the second ---
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim() === '---') {
        frontmatterEnd = i;
        break;
      }
    }
  }

  if (frontmatterEnd === -1) {
    return { frontmatter: {}, content: markdown };
  }

  // Extract frontmatter lines
  const frontmatterLines = lines.slice(frontmatterStart, frontmatterEnd);
  const frontmatter: Record<string, any> = {};

  // Simple YAML parser for key: value pairs
  frontmatterLines.forEach(line => {
    const trimmedLine = line.trim();
    if (!trimmedLine || trimmedLine.startsWith('#')) return; // Skip empty lines and comments
    
    const colonIndex = trimmedLine.indexOf(':');
    if (colonIndex > 0) {
      const key = trimmedLine.substring(0, colonIndex).trim();
      let value = trimmedLine.substring(colonIndex + 1).trim();
      
      // Remove quotes if present (handles both single and double quotes)
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Try to parse as number (but keep as string if it's a path or URL)
      if (!isNaN(Number(value)) && value !== '' && !value.startsWith('/') && !value.startsWith('http')) {
        // Check if it's a decimal number
        if (value.includes('.')) {
          frontmatter[key] = parseFloat(value);
        } else {
          frontmatter[key] = parseInt(value, 10);
        }
      } else {
        frontmatter[key] = value;
      }
    }
  });

  // Extract content after frontmatter
  const content = lines.slice(frontmatterEnd + 1).join('\n').trim();

  return { frontmatter, content };
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
 * Parse a project with frontmatter format
 */
export function parseFrontmatterProject(markdown: string, filename?: string): FrontmatterProject {
  const { frontmatter, content } = parseFrontmatter(markdown);
  
  if (!frontmatter.title && !frontmatter.slug) {
    throw new Error('Frontmatter project must have title or slug');
  }

  const title = frontmatter.title || extractTitle(content) || 'Untitled Project';
  const slug = frontmatter.slug || title.toLowerCase().replace(/\s+/g, '-');
  const id = slug;

  // Parse sections from content
  const sections = parseMarkdown(content);

  return {
    id,
    title,
    slug,
    location: frontmatter.location || '',
    property_type: frontmatter.property_type || '',
    square_feet: frontmatter.square_feet || 0,
    bedrooms: frontmatter.bedrooms || 0,
    bathrooms: frontmatter.bathrooms || 0,
    builder: frontmatter.builder || '',
    status: frontmatter.status || '',
    image: frontmatter.image || frontmatter.hero_image || '',
    hero_image: frontmatter.hero_image || frontmatter.image || '',
    pdf_packet: frontmatter.packet || frontmatter.pdf_packet || frontmatter.pdfPacket || '',
    project: frontmatter.project || '',
    year: frontmatter.year || undefined,
    content,
    sections
  };
}

/**
 * Check if markdown has frontmatter
 */
function hasFrontmatter(markdown: string): boolean {
  return markdown.trim().startsWith('---');
}

/**
 * Parse a project detail markdown file
 */
export function parseProjectDetail(markdown: string, filename?: string): Project {
  // Check if this is a frontmatter-based project
  if (hasFrontmatter(markdown)) {
    // Parse as frontmatter project
    const frontmatterProject = parseFrontmatterProject(markdown, filename);
    
    // Convert to regular Project format for compatibility
    const sections = frontmatterProject.sections;
    const sectionMap: Record<string, string> = {};
    sections.forEach(section => {
      if (!sectionMap[section.title]) {
        sectionMap[section.title] = section.content;
      }
    });

    // Extract gallery if present
    const gallery = extractBulletPoints(sectionMap['Gallery'] || '');
    
    // Extract home designs from "Home Designs" section (or alternative names)
    const homeDesignsContent = sectionMap['Home Designs'] || 
                                sectionMap['Thoughtfully Designed Homes'] || 
                                sectionMap['Available Home Designs'] || '';
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
            // Parse the format: "Two-Story | 3 Bed | 2.5 Bath | 2,800 sq ft" or "2,782 SF | 3 Bedrooms | 2.5 Bathrooms | 3-Car Garage"
            const parts = line.split('|').map(p => p.trim());
            if (parts.length >= 3) {
              // Check if first part is a type (Ranch, Two-Story) or square footage
              const firstPart = parts[0];
              if (firstPart.match(/^(Ranch|Two-Story|Loft|Single-Story|Two Story)/i)) {
                // Format: "Ranch | 2 Bed | 2.5 Bath | 2,056 sq ft"
                currentDesign.type = parts[0];
                // Parse bedrooms - handle "2 Bed" format
                const bedroomsPart = parts[1] || '';
                currentDesign.bedrooms = bedroomsPart.replace(/\s*Bed(s)?/i, '').trim();
                // Parse bathrooms - handle "2.5 Bath" format
                const bathroomsPart = parts[2] || '';
                currentDesign.bathrooms = bathroomsPart.replace(/\s*Bath(s)?/i, '').trim();
                // Parse sqft - handle "2,056 sq ft" format
                const sqftPart = parts[3] || '';
                currentDesign.sqft = sqftPart.replace(/\s*sq\s*ft/i, '').trim();
              } else if (firstPart.match(/\d+.*SF|sq\s*ft/i)) {
                // Format: "2,782 SF | 3 Bedrooms | 2.5 Bathrooms | 3-Car Garage"
                currentDesign.type = 'Ranch'; // Default type
                currentDesign.sqft = parts[0];
                // Parse bedrooms - handle "3 Bedrooms" or "3 Bed" format
                const bedroomsPart = parts[1] || '';
                currentDesign.bedrooms = bedroomsPart.replace(/\s*Bedrooms?/i, '').trim();
                // Parse bathrooms - handle "2.5 Bathrooms" or "2.5 Bath" format
                const bathroomsPart = parts[2] || '';
                currentDesign.bathrooms = bathroomsPart.replace(/\s*Bathrooms?/i, '').trim();
                // Garage info might be in parts[3] - add to stats if present
                if (parts[3] && parts[3].includes('Garage')) {
                  if (!currentDesign.stats) {
                    currentDesign.stats = [];
                  }
                  currentDesign.stats.push({ label: 'Garage', value: parts[3] });
                }
              } else {
                // Try to parse as standard format
                if (parts.length >= 4) {
                  currentDesign.type = parts[0];
                  currentDesign.bedrooms = parts[1];
                  currentDesign.bathrooms = parts[2];
                  currentDesign.sqft = parts[3];
                } else if (parts.length >= 3) {
                  // Handle 3-part format
                  currentDesign.type = 'Ranch'; // Default
                  currentDesign.sqft = parts[0];
                  currentDesign.bedrooms = parts[1];
                  currentDesign.bathrooms = parts[2];
                }
              }
            }
          } else if (line.includes('Image:')) {
            // Parse image URL - handle format: "Image: `/path/to/image.png`"
            let imageLine = line.split('Image:')[1] || '';
            imageLine = imageLine.trim();
            // Remove backticks and extra slashes if present
            imageLine = imageLine.replace(/^`|`$/g, '').trim();
            // Ensure it starts with /
            if (imageLine && !imageLine.startsWith('/')) {
              imageLine = '/' + imageLine;
            }
            if (imageLine) {
              currentDesign.imageUrl = imageLine;
            }
          } else if (line.trim().startsWith('-')) {
            // Parse stats/details like "- Energy Rating: HERS 55" or "- HERS 58"
            if (!currentDesign.stats) {
              currentDesign.stats = [];
            }
            const statLine = line.trim().replace(/^-\s*/, '');
            const colonIndex = statLine.indexOf(':');
            if (colonIndex > 0) {
              // Format: "Energy Rating: HERS 55"
              const label = statLine.substring(0, colonIndex).trim();
              const value = statLine.substring(colonIndex + 1).trim();
              currentDesign.stats.push({ label, value });
            } else {
              // Format: "- HERS 58" or "- 2-Car Garage" - treat as description or stat
              // Check if it looks like a stat (contains numbers/ratings)
              if (statLine.match(/\d+/) || statLine.includes('HERS') || statLine.includes('Garage') || statLine.includes('Car') || statLine.includes('Stories')) {
                // Try to parse as stat
                // Try to extract label and value
                if (statLine.includes('HERS')) {
                  const hersMatch = statLine.match(/HERS\s+(\d+)/i);
                  if (hersMatch) {
                    currentDesign.stats.push({ label: 'Energy Rating', value: `HERS ${hersMatch[1]}` });
                  } else {
                    currentDesign.stats.push({ label: 'Energy Rating', value: statLine });
                  }
                } else if (statLine.includes('Garage') || statLine.includes('Car')) {
                  currentDesign.stats.push({ label: 'Garage', value: statLine });
                } else if (statLine.includes('Stories')) {
                  currentDesign.stats.push({ label: 'Stories', value: statLine });
                } else {
                  currentDesign.stats.push({ label: 'Details', value: statLine });
                }
              } else {
                // Add to description
                if (currentDesign.description) {
                  currentDesign.description += ' ' + statLine;
                } else {
                  currentDesign.description = statLine;
                }
              }
            }
          } else if (line.trim() === '**Details**' || line.trim() === 'Details' || line.trim().startsWith('**Details**')) {
            // Skip the Details header
            continue;
          } else if (!line.startsWith('**') && line.trim() && !line.startsWith('###') && !line.startsWith('Details')) {
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
    
    // Use image from frontmatter, or first image from gallery, or empty
    const firstImage = frontmatterProject.image || frontmatterProject.hero_image || (gallery.length > 0 ? gallery[0] : '');

    // Determine buildType from project field, or default to custom
    let buildType: 'custom' | 'production' = 'custom';
    if (frontmatterProject.project) {
      if (frontmatterProject.project.toLowerCase() === 'production') {
        buildType = 'production';
      } else if (frontmatterProject.project.toLowerCase() === 'custom') {
        buildType = 'custom';
      }
    }

    return {
      id: frontmatterProject.id,
      title: frontmatterProject.title,
      description: sectionMap['Description'] || sectionMap['Overview'] || frontmatterProject.content.split('\n').find(line => line.trim() && !line.startsWith('#')) || '',
      status: frontmatterProject.status,
      year: frontmatterProject.year ? frontmatterProject.year.toString() : '',
      imageUrl: firstImage,
      overview: sectionMap['Overview'] || frontmatterProject.content.split('\n').find(line => line.trim() && !line.startsWith('#')) || '',
      features: extractBulletPoints(sectionMap['Features'] || ''),
      specifications: {
        'Location': frontmatterProject.location,
        'Property Type': frontmatterProject.property_type,
        'Square Feet': frontmatterProject.square_feet.toString(),
        'Bedrooms': frontmatterProject.bedrooms.toString(),
        'Bathrooms': frontmatterProject.bathrooms.toString(),
        'Builder': frontmatterProject.builder
      },
      impact: '',
      buildType: buildType,
      visible: true,
      sustainability: extractBulletPoints(sectionMap['Sustainability & Performance'] || sectionMap['Sustainability'] || ''),
      homeDesigns: homeDesigns.length > 0 ? homeDesigns : undefined,
      gallery: gallery.length > 0 ? gallery : undefined,
      pdfPacket: frontmatterProject.pdf_packet || sectionMap['PDF Packet'] || '',
      isFrontmatter: true,
      frontmatterProject: frontmatterProject
    };
  }
  
  // Original parsing logic for non-frontmatter projects
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
  
  // Debug: Log all sections found (only for development)
  if (process.env.NODE_ENV === 'development' && title.includes('Slayter')) {
    console.log('📋 Sections found for', title, ':', Object.keys(sectionMap));
    if (sectionMap['Gallery']) {
      console.log('📸 Gallery section content:', sectionMap['Gallery']);
    }
  }
  
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

  // Extract gallery images
  const galleryContent = sectionMap['Gallery'] || '';
  const gallery = extractBulletPoints(galleryContent);
  if (gallery.length > 0) {
    console.log(`📸 Gallery found for ${title}: ${gallery.length} images`, gallery);
  } else if (galleryContent) {
    console.log(`⚠️ Gallery section exists but no images found for ${title}. Content:`, galleryContent);
  }

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
  
  // Generate ID from title (normalize multiple consecutive hyphens)
  const id = title.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-') // Normalize multiple consecutive hyphens to single hyphen
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
  
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
  
  // Check filename prefix first (highest priority)
  if (filename) {
    const filenameLower = filename.toLowerCase();
    if (filenameLower.startsWith('c-')) {
      buildType = 'custom';
    } else if (filenameLower.startsWith('p-')) {
      buildType = 'production';
    } else {
      // If filename doesn't match prefix pattern, continue to other checks
      // Check explicit Build Type section
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
    }
  } else {
    // No filename provided, use existing logic
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
    pdfPacket: pdfPacket || undefined,
    gallery: gallery.length > 0 ? gallery : undefined
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