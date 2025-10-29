# Color Customization Guide

This guide will help you customize all the colors used in your Boiler Build project. The project uses CSS custom properties (variables) for easy color management.

## 🎨 Primary Color System

### Main Brand Colors
Your project currently uses these key colors:

| Variable | Current Value | Usage |
|----------|---------------|-------|
| `--accent` | `#cebc89` | Primary brand color (gold) - buttons, borders, highlights |
| `--primary` | `#374151` | Secondary brand color (dark gray) - text, backgrounds |
| `--background` | `#f3f4f6` | Main page background (light gray) |
| `--foreground` | `#374151` | Primary text color |

### Complete Color Palette

#### Core Colors
```css
--background: #f3f4f6;        /* Page background */
--foreground: #374151;        /* Main text color */
--card: #f9fafb;             /* Card backgrounds */
--card-foreground: #374151;  /* Text on cards */
```

#### Brand Colors
```css
--primary: #374151;          /* Secondary brand color */
--primary-foreground: #f3f4f6; /* Text on primary backgrounds */
--accent: #cebc89;           /* Primary brand color (gold) */
--accent-foreground: #ffffff; /* Text on accent backgrounds */
```

#### UI Elements
```css
--secondary: #eef2f7;        /* Secondary backgrounds */
--secondary-foreground: #374151; /* Text on secondary backgrounds */
--muted: #eef2f7;           /* Muted backgrounds */
--muted-foreground: #6b7280; /* Muted text color */
--border: #cebc89;          /* Border color (matches accent) */
```

#### Interactive Elements
```css
--input: transparent;        /* Input border */
--input-background: #eef2f7; /* Input background */
--switch-background: #e5e7eb; /* Switch/toggle background */
--ring: #cebc89;            /* Focus ring color */
```

#### Status Colors
```css
--destructive: #e53e3e;     /* Error/danger color */
--destructive-foreground: #ffffff; /* Text on destructive backgrounds */
```

#### Chart Colors
```css
--chart-1: #cebc89;         /* Chart color 1 (matches accent) */
--chart-2: #374151;         /* Chart color 2 (matches primary) */
--chart-3: #38a169;         /* Chart color 3 (green) */
--chart-4: #3182ce;         /* Chart color 4 (blue) */
--chart-5: #805ad5;         /* Chart color 5 (purple) */
```

#### Sidebar Colors (if used)
```css
--sidebar: #374151;         /* Sidebar background */
--sidebar-foreground: #f3f4f6; /* Sidebar text */
--sidebar-primary: #cebc89; /* Sidebar primary accent */
--sidebar-primary-foreground: #ffffff; /* Text on sidebar primary */
--sidebar-accent: #38a169;  /* Sidebar accent color */
--sidebar-accent-foreground: #ffffff; /* Text on sidebar accent */
--sidebar-border: #cebc89;  /* Sidebar borders */
--sidebar-ring: #cebc89;    /* Sidebar focus rings */
```

## 🛠️ How to Customize Colors

### Option 1: Edit CSS Variables (Recommended - Global Changes)

1. Open `src/styles/globals.css`
2. Find the `:root` section (lines 2-41)
3. Modify the color values you want to change
4. Save the file - changes will apply immediately

### Option 2: Create a New Color Theme

1. Create a new CSS file (e.g., `src/styles/custom-theme.css`)
2. Override the variables you want to change:
```css
:root {
  --accent: #your-new-color;
  --primary: #your-new-primary;
  /* ... other customizations */
}
```
3. Import it in your main CSS file

### Option 3: Change Colors Directly in TSX Files (Component-Specific)

You can override colors directly in individual TSX components using inline styles or custom CSS classes.

#### Method 3A: Inline Styles
```tsx
// Example: Change a specific button color
<Button 
  style={{ 
    backgroundColor: '#your-custom-color',
    color: '#your-text-color',
    borderColor: '#your-border-color'
  }}
>
  Custom Button
</Button>

// Example: Change background of a section
<section 
  style={{ backgroundColor: '#your-custom-bg' }}
  className="py-20"
>
  Content here
</section>
```

#### Method 3B: Custom CSS Classes in TSX
```tsx
// In your component file, add a style tag
export function CustomComponent() {
  return (
    <>
      <style>{`
        .custom-section {
          background-color: #your-custom-color;
        }
        .custom-button {
          background-color: #your-button-color;
          color: #your-text-color;
        }
      `}</style>
      
      <section className="custom-section py-20">
        <button className="custom-button px-4 py-2">
          Custom Button
        </button>
      </section>
    </>
  );
}
```

#### Method 3C: Override Tailwind Classes with Custom Values
```tsx
// Use arbitrary values in Tailwind classes
<div className="bg-[#your-custom-color] text-[#your-text-color]">
  Custom colored content
</div>

// Example from your components:
<h2 className="text-4xl text-[#your-custom-heading-color] mb-6">
  {title}
</h2>

<div className="border-2 border-[#your-custom-border-color] rounded-xl p-8">
  Custom bordered card
</div>
```

#### Method 3D: Conditional Styling Based on Props
```tsx
interface ComponentProps {
  variant?: 'primary' | 'secondary' | 'accent';
  customColor?: string;
}

export function CustomComponent({ variant, customColor }: ComponentProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary text-primary-foreground';
      case 'secondary':
        return 'bg-secondary text-secondary-foreground';
      case 'accent':
        return 'bg-accent text-accent-foreground';
      default:
        return 'bg-background text-foreground';
    }
  };

  return (
    <div 
      className={customColor ? '' : getVariantStyles()}
      style={customColor ? { backgroundColor: customColor } : {}}
    >
      Content with conditional styling
    </div>
  );
}
```

## 📝 Real Examples from Your TSX Files

### Example 1: About Component (`src/components/About.tsx`)
```tsx
// Current code with CSS variables
<section className="bg-background py-20">
  <h2 className="text-4xl text-foreground mb-4">{title}</h2>
  <div className="border-2 border-accent rounded-xl p-8 bg-card">
    <div className="bg-accent rounded-lg w-12 h-12 flex items-center justify-center">
      <Icon className="w-5 h-5 text-foreground" />
    </div>
  </div>
</section>

// Customized with inline styles
<section style={{ backgroundColor: '#f8f9fa' }} className="py-20">
  <h2 style={{ color: '#2d3748' }} className="text-4xl mb-4">{title}</h2>
  <div style={{ borderColor: '#4299e1' }} className="border-2 rounded-xl p-8">
    <div style={{ backgroundColor: '#4299e1' }} className="rounded-lg w-12 h-12 flex items-center justify-center">
      <Icon className="w-5 h-5" style={{ color: '#ffffff' }} />
    </div>
  </div>
</section>

// Customized with Tailwind arbitrary values
<section className="bg-[#f8f9fa] py-20">
  <h2 className="text-4xl text-[#2d3748] mb-4">{title}</h2>
  <div className="border-2 border-[#4299e1] rounded-xl p-8">
    <div className="bg-[#4299e1] rounded-lg w-12 h-12 flex items-center justify-center">
      <Icon className="w-5 h-5 text-white" />
    </div>
  </div>
</section>
```

### Example 2: CTA Component (`src/components/CTA.tsx`)
```tsx
// Current code
<section className="bg-accent py-20">
  <h2 className="text-4xl text-foreground mb-6">{title}</h2>
  <Button className="bg-background text-foreground hover:bg-primary">
    Join Our Team
  </Button>
</section>

// Customized version
<section style={{ backgroundColor: '#3b82f6' }} className="py-20">
  <h2 style={{ color: '#ffffff' }} className="text-4xl mb-6">{title}</h2>
  <Button 
    style={{ 
      backgroundColor: '#ffffff',
      color: '#3b82f6'
    }}
    className="hover:opacity-90"
  >
    Join Our Team
  </Button>
</section>
```

### Example 3: Hero Component (`src/components/Hero.tsx`)
```tsx
// Current code
<div className="bg-accent rounded-lg w-12 h-12 flex items-center justify-center mb-6">
  <span className="text-sm text-foreground">NAHB Student Competition 2024</span>
</div>

// Customized with conditional styling
<div 
  className="rounded-lg w-12 h-12 flex items-center justify-center mb-6"
  style={{ backgroundColor: eventColor || '#cebc89' }}
>
  <span 
    className="text-sm"
    style={{ color: textColor || '#374151' }}
  >
    NAHB Student Competition 2024
  </span>
</div>
```

### Example 4: Button Variations
```tsx
// Standard button with CSS variables
<Button className="bg-accent text-accent-foreground">
  Standard Button
</Button>

// Custom colored button
<Button 
  style={{
    backgroundColor: '#10b981',
    color: '#ffffff',
    borderColor: '#10b981'
  }}
>
  Green Button
</Button>

// Button with Tailwind arbitrary values
<Button className="bg-[#ef4444] text-white border-[#ef4444]">
  Red Button
</Button>
```

## 🎯 Color Usage Throughout the App

### Where Each Color is Used:

#### `--accent` (#cebc89 - Gold)
- **Headers**: All h1, h2, h3, h4, h5, h6 elements
- **Borders**: All borders, cards, buttons
- **Buttons**: Primary button backgrounds
- **Focus states**: Focus rings and outlines
- **Highlights**: Important UI elements

#### `--primary` (#374151 - Dark Gray)
- **Text**: Main text color
- **Backgrounds**: Button backgrounds, card text
- **Charts**: Secondary chart color

#### `--background` (#f3f4f6 - Light Gray)
- **Page background**: Main page background
- **Card backgrounds**: Used in some card variations

#### `--foreground` (#374151 - Dark Gray)
- **Text**: Primary text color throughout the app

## 🎨 Quick Color Scheme Ideas

### Modern Blue Theme
```css
--accent: #3b82f6;          /* Blue */
--primary: #1e40af;         /* Dark blue */
--background: #f8fafc;      /* Light blue-gray */
--foreground: #1e293b;      /* Dark blue-gray */
```

### Green Nature Theme
```css
--accent: #10b981;          /* Green */
--primary: #047857;         /* Dark green */
--background: #f0fdf4;      /* Light green */
--foreground: #064e3b;      /* Dark green */
```

### Purple Tech Theme
```css
--accent: #8b5cf6;          /* Purple */
--primary: #5b21b6;         /* Dark purple */
--background: #faf5ff;      /* Light purple */
--foreground: #2e1065;      /* Dark purple */
```

### Red Energy Theme
```css
--accent: #ef4444;          /* Red */
--primary: #b91c1c;         /* Dark red */
--background: #fef2f2;      /* Light red */
--foreground: #7f1d1d;      /* Dark red */
```

## 💡 TSX Color Customization Tips

### When to Use Each Method:

#### Use CSS Variables (globals.css) when:
- ✅ You want to change colors globally across the entire app
- ✅ You want consistent theming
- ✅ You're changing brand colors
- ✅ You want easy maintenance

#### Use TSX inline styles when:
- ✅ You need component-specific colors
- ✅ Colors change based on props or state
- ✅ You're prototyping or testing colors
- ✅ You need dynamic color changes

#### Use Tailwind arbitrary values when:
- ✅ You want to keep Tailwind's utility classes
- ✅ You need one-off color changes
- ✅ You want to override specific instances

### Best Practices for TSX Color Changes:

1. **Maintain Accessibility**
```tsx
// Good: High contrast
<div style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}>
  Dark background with white text
</div>

// Bad: Low contrast
<div style={{ backgroundColor: '#f0f0f0', color: '#f5f5f5' }}>
  Light gray background with very light gray text
</div>
```

2. **Use Consistent Color Formats**
```tsx
// Good: Consistent hex format
const colors = {
  primary: '#3b82f6',
  secondary: '#64748b',
  accent: '#f59e0b'
};

// Bad: Mixed formats
const colors = {
  primary: 'blue',
  secondary: '#64748b',
  accent: 'rgb(245, 158, 11)'
};
```

3. **Create Reusable Color Props**
```tsx
interface ComponentProps {
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
}

export function CustomComponent({ 
  backgroundColor = '#ffffff',
  textColor = '#000000',
  borderColor = '#e5e7eb'
}: ComponentProps) {
  return (
    <div 
      style={{ 
        backgroundColor,
        color: textColor,
        borderColor,
        border: '1px solid'
      }}
    >
      Customizable component
    </div>
  );
}
```

4. **Combine CSS Variables with Inline Styles**
```tsx
// Use CSS variables as fallbacks
<div 
  style={{ 
    backgroundColor: customBg || 'var(--background)',
    color: customText || 'var(--foreground)'
  }}
>
  Smart color handling
</div>
```

## ⚠️ Important Notes

1. **Accessibility**: Ensure sufficient contrast between text and background colors
2. **Consistency**: The accent color is used extensively - changing it will affect the entire design
3. **Testing**: Test your color changes on all pages to ensure they work well together
4. **Backup**: Keep a backup of your original colors before making changes
5. **Performance**: Inline styles have higher specificity - use sparingly for large-scale changes
6. **Maintenance**: Consider using CSS variables for colors you might change frequently

## 🔍 Finding Colors in Components

### Common Color Classes Used:
- `bg-accent` - Accent background
- `text-accent` - Accent text color
- `border-accent` - Accent border
- `bg-primary` - Primary background
- `text-primary` - Primary text color
- `bg-background` - Main background
- `text-foreground` - Main text color
- `text-muted-foreground` - Muted text color

### Files to Check:
- `src/components/` - All component files use these color variables
- `src/pages/` - All page files use these color variables
- `src/styles/globals.css` - Main color definitions
- `src/index.css` - Additional color definitions

## 🚀 Quick Start

To quickly change your brand colors:

1. Open `src/styles/globals.css`
2. Find line 16: `--accent: #cebc89;`
3. Change to your desired color: `--accent: #your-color;`
4. Find line 10: `--primary: #374151;`
5. Change to your desired color: `--primary: #your-color;`
6. Save and see the changes!

The accent color will automatically update:
- All headings (h1-h6)
- All borders
- All buttons
- All focus states
- All highlights

Happy customizing! 🎨
