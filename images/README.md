# Image Hosting Guide

This folder contains all static assets for the website, including project images.

## Quick Start

1. **Add your image** to the appropriate folder in `/images/projects/`
2. **Update the project markdown** with the correct path
3. **Test the image** displays correctly on the website

## Folder Structure

```
public/
├── images/
│   ├── projects/
│   │   ├── heroes/          # Main project images (1200x800px)
│   │   ├── galleries/       # Additional project photos
│   │   ├── thumbnails/      # Small preview images (400x300px)
│   │   └── logos/           # Project and team logos (200x200px)
│   └── README.md           # This file
└── (other static assets)
```

## Image Paths

Use these paths in your project markdown files:

```markdown
## Image
/images/projects/heroes/my-project-hero.jpg
```

## Best Practices

- **Optimize images** before uploading (compress, resize)
- **Use descriptive filenames** that match your project name
- **Keep file sizes reasonable** (under 500KB for heroes, under 100KB for thumbnails)
- **Use WebP format** when possible for better compression
- **Test on different devices** to ensure images look good

## Supported Formats

- **JPG**: Best for photographs
- **PNG**: Best for graphics with transparency
- **WebP**: Best compression, modern browsers
- **SVG**: Vector graphics (logos, icons)

## Need Help?

Check the main project documentation at `/src/content/projects/README.md` for detailed instructions.

