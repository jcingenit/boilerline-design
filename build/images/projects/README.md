# Project Images

This folder contains all project-related images organized by type and purpose.

## Folder Structure

### `/heroes/`
Main hero images for each project. These are the primary images displayed on project cards and detail pages.
- **Recommended size**: 1200x800px or similar aspect ratio
- **Format**: JPG, PNG, or WebP
- **Naming**: `project-name-hero.jpg` (e.g., `ecohouse-2024-hero.jpg`)

### `/galleries/`
Additional project images for galleries, detail views, and showcases.
- **Recommended size**: 800x600px or similar
- **Format**: JPG, PNG, or WebP
- **Naming**: `project-name-gallery-1.jpg`, `project-name-gallery-2.jpg`, etc.

### `/thumbnails/`
Small thumbnail images for project listings and previews.
- **Recommended size**: 400x300px or similar
- **Format**: JPG, PNG, or WebP
- **Naming**: `project-name-thumb.jpg`

### `/logos/`
Project logos, team logos, or competition logos.
- **Recommended size**: 200x200px or similar (square aspect ratio)
- **Format**: PNG with transparent background preferred
- **Naming**: `project-name-logo.png`

## Usage in Project Files

Use relative paths from the project markdown files:

```markdown
## Image
/images/projects/heroes/ecohouse-2024-hero.jpg
```

## Image Optimization Tips

1. **Compress images** before uploading to reduce file size
2. **Use WebP format** when possible for better compression
3. **Provide multiple sizes** for responsive design
4. **Use descriptive filenames** that match the project name
5. **Keep file sizes under 500KB** for hero images, under 100KB for thumbnails

## Adding New Images

1. Save your image in the appropriate folder
2. Use the recommended naming convention
3. Update the project markdown file with the correct path
4. Test the image displays correctly on the website
