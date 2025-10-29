## Visible
false

# Adding New Projects

This guide explains how to add new projects to the portfolio without modifying any other files.

## Quick Start

1. **Copy the template**: Copy `PROJECT_TEMPLATE.md` to a new file with your project name
2. **Fill out the fields**: Complete all the required sections
3. **Save the file**: The project will automatically appear in the portfolio

## File Naming

- Use kebab-case for filenames (e.g., `my-awesome-project-2024.md`)
- Include the year in the filename for easy identification
- Avoid spaces and special characters

## Required Sections

### Basic Information
- **Title**: The project name (used as the main heading)
- **Overview**: Brief description of the project
- **Status**: Current status (e.g., "Completed", "In Development", "NAHB Winner 2024")
- **Year**: Single year (e.g., "2024") or year range (e.g., "2023-2024", "2023–2024")
- **Image**: Path to the main project image (use `/images/projects/heroes/project-name-hero.jpg`)
- **Description**: Detailed description of the project
- **Visible**: Whether the project should be displayed (true/false, yes/no, visible/hidden)

### Project Classification
- **Build Type**: Either "Production" or "Custom"
  - **Production**: NAHB competitions, community developments, residential projects
  - **Custom**: Unique, one-of-a-kind, experimental, or showcase projects
- **Visible**: Whether the project should be displayed on the website
  - **true/yes/visible**: Project will be shown on the website (default)
  - **false/no/hidden**: Project will be hidden from the website

### Content Sections
- **Features**: Key features of the project (bullet points with **bold** titles)
- **Specifications**: Technical details (use **Key**: Value format)
- **Impact**: Project's impact and recognition

### Optional Sections
- **Sustainability**: Environmental features and certifications
- **Home Designs**: Individual home/unit designs (use ### for each design)
- **Community Highlights**: Community-focused features
- **Digital Experience**: Technology and digital features
- **Warranty & Quality Assurance**: Warranty and quality information

## Build Type Detection

The system automatically detects build type based on content analysis, but you can explicitly set it:

### Production Indicators
- NAHB competitions
- Student competitions
- Community developments
- Residential projects
- Housing developments
- Feasibility studies
- Design development

### Custom Indicators
- Custom builds
- Bespoke designs
- Unique projects
- One-of-a-kind
- Showcase projects
- Demonstrations
- Prototypes
- Experimental

## Year Format Support

The system supports various year formats:
- Single year: `2024`
- Year range with hyphen: `2023-2024`
- Year range with en-dash: `2023–2024`

For year ranges, the system uses the first year for sorting purposes.

## Example Project Structure

```markdown
# My Awesome Project

## Overview
A brief description of what this project is about.

## Status
Completed

## Year
2024

## Image
https://images.unsplash.com/photo-...

## Description
Detailed description of the project, its goals, and significance.

## Features
- **Feature 1**: Description of the first key feature
- **Feature 2**: Description of the second key feature

## Specifications
- **Total Area**: 1,200 sq ft
- **Construction Time**: 6 months
- **Energy Rating**: LEED Gold

## Build Type
Production

## Impact
This project won first place and has been featured in multiple publications.
```

## Visibility Control

The visibility feature allows you to control which projects are displayed on the website:

### When to Hide Projects
- **In Development**: Projects that aren't ready for public viewing
- **Draft Status**: Projects with incomplete information
- **Archived Projects**: Old projects you want to keep but not display
- **Test Projects**: Projects used for testing the system

### How to Hide a Project
Add a `## Visible` section to your project markdown with any of these values:
- `false`
- `no`
- `hidden`
- `hide`

### How to Show a Project
- Omit the `## Visible` section (defaults to visible)
- Set `## Visible` to `true`, `yes`, or `visible`

### Automatic Exclusions
The following files are automatically excluded from the website:
- `PROJECT_TEMPLATE.md` - Template file for creating new projects
- `README.md` - Documentation file
- Any file with "template" or "project name" in the title

## Image Hosting

The website now supports local image hosting through the `public/images/projects/` folder structure.

### Image Organization
- **Hero Images**: `/public/images/projects/heroes/` - Main project images (1200x800px recommended)
- **Gallery Images**: `/public/images/projects/galleries/` - Additional project photos
- **Thumbnails**: `/public/images/projects/thumbnails/` - Small preview images (400x300px)
- **Logos**: `/public/images/projects/logos/` - Project and team logos (200x200px)

### Image Paths in Projects
Use relative paths from the project root:
```markdown
## Image
/images/projects/heroes/my-project-hero.jpg
```

### Image Optimization
- **Format**: Use WebP when possible, fallback to JPG/PNG
- **Size**: Keep hero images under 500KB, thumbnails under 100KB
- **Naming**: Use descriptive names like `project-name-hero.jpg`
- **Compression**: Optimize images before uploading

### Adding Images
1. Save your image in the appropriate folder
2. Use the recommended naming convention
3. Update the project markdown with the correct path
4. Test that the image displays correctly

## Tips for Success

1. **Use consistent formatting**: Follow the template structure exactly
2. **Include high-quality images**: Use local images or optimize external ones
3. **Write compelling descriptions**: Make your project stand out with engaging content
4. **Be specific with specifications**: Include concrete numbers and details
5. **Use proper markdown**: Bold text with `**text**`, bullet points with `-`
6. **Control visibility**: Use the visibility feature to manage which projects are shown
7. **Optimize images**: Compress and properly size your images for web performance

## Troubleshooting

### Project Not Appearing
- Check that the file is saved in the `src/content/projects/` folder
- Ensure the filename ends with `.md`
- Verify the markdown syntax is correct
- Check the browser console for error messages

### Build Type Not Detected Correctly
- Add an explicit "Build Type" section to your project
- Use clear production or custom indicators in your content
- Check that your content matches the detection criteria

### Year Sorting Issues
- Use the first year of a range for proper sorting
- Ensure years are in YYYY format
- Avoid using relative terms like "this year" or "next year"

## Need Help?

If you encounter issues:
1. Check the browser console for error messages
2. Compare your file with existing working projects
3. Use the template as a reference
4. Ensure all required sections are present
