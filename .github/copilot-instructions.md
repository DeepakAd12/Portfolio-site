# Copilot Instructions for Portfolio Project

This document provides guidance for AI coding agents working on the Deepak Portfolio project.

## Project Overview

This is a modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript. The project showcases a professional portfolio with sections for hero, about, projects, skills, and contact information.

## Architecture

### File Structure
- **index.html** - Main HTML structure with semantic sections
- **styles.css** - All styling, animations, and responsive design
- **script.js** - JavaScript for interactivity (navigation, animations, scroll effects)
- **package.json** - Project metadata

### Key Sections
1. **Navigation Bar** - Fixed navigation with mobile hamburger menu
2. **Hero Section** - Large banner with call-to-action buttons
3. **About Section** - Personal introduction and statistics
4. **Projects Section** - Grid layout showcasing featured projects
5. **Skills Section** - Categorized skills display
6. **Contact Section** - Contact information and social links
7. **Footer** - Copyright information

## Design System

### Color Palette
- Primary Color: `#6366f1` (Indigo)
- Secondary Color: `#8b5cf6` (Purple)
- Dark Background: `#0f172a`
- Light Background: `#f8fafc`
- Text Dark: `#1e293b`
- Text Light: `#64748b`

### CSS Variables
All colors and common values are defined as CSS variables in `:root` for easy maintenance.

### Typography
- Font Family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Base Line Height: 1.6

## JavaScript Features

### Navigation
- Mobile menu toggle with hamburger button
- Click-outside detection to close menu
- Smooth scroll navigation to sections
- Active link highlighting based on scroll position

### Animations
- Fade-in-up animations for sections
- Intersection Observer for scroll-triggered animations
- Parallax effect on hero section
- Hover effects on cards and buttons

### Responsive Behavior
- Automatic hamburger menu display on tablets and mobile
- Flexible grid layouts that adapt to screen size
- Touch-friendly button sizes

## Development Workflow

### Running the Project
```bash
python -m http.server 8000
# Then open http://localhost:8000
```

### Making Updates

1. **Update Personal Information**
   - Edit contact details in the Contact Section (index.html)
   - Update social media links
   - Modify hero title and subtitle

2. **Add/Update Projects**
   - Duplicate a project-card div
   - Update project name, description, image, tags, and link
   - Images are from placeholder service, replace with actual images

3. **Modify Styles**
   - Update colors in CSS variables
   - Modify breakpoints for responsive design
   - Adjust animations and transitions

4. **Enhance JavaScript**
   - Add form submission handling
   - Implement API calls if needed
   - Add new interactive features

## Responsive Design

### Breakpoints
- **768px**: Tablet breakpoint (hamburger menu appears)
- **480px**: Mobile breakpoint (additional adjustments)

### Mobile-First Approach
Styles are designed for mobile first, then enhanced for larger screens.

## Performance Considerations

1. **Minimize HTTP Requests** - Use CSS for graphics and animations instead of images
2. **Optimize Images** - Replace placeholder images with optimized versions
3. **Lazy Load Content** - Use Intersection Observer for animations
4. **Minify Code** - Minify CSS and JS for production

## Customization Guidelines

### Adding New Sections
1. Create a new `<section>` element with an id
2. Add navigation link pointing to the section id
3. Style the section in styles.css
4. Add smooth scroll functionality in script.js

### Updating Colors
- Change CSS variables in `:root`
- All components will automatically update

### Adding New Features
- Keep JavaScript modular and organized
- Use event delegation where appropriate
- Add comments for complex logic
- Test on mobile devices during development

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- ES6 JavaScript support required
- Intersection Observer API support required

## Deployment

1. Build the project (no build step needed for static sites)
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. Choose main branch and /root directory
5. Site will be available at `https://username.github.io/portfolio`

## Common Tasks

### Task: Update Hero Section Text
- File: index.html, lines with `.hero-title`, `.hero-subtitle`
- Update the text content as needed

### Task: Add New Project
- File: index.html, Projects Section
- Duplicate `.project-card` div and customize

### Task: Change Color Theme
- File: styles.css, `:root` section
- Update `--primary-color` and `--secondary-color`

### Task: Fix Mobile Navigation
- File: script.js, hamburger click handler
- File: styles.css, mobile breakpoint media queries

## Debugging Tips

1. Use browser DevTools for CSS and layout issues
2. Check console for JavaScript errors
3. Test responsive design with browser resize or mobile device
4. Verify all external resources (icons, fonts) load correctly

## Future Enhancements

- Add dark mode toggle
- Implement blog section
- Add contact form with backend
- Add image gallery/carousel
- Implement search functionality
- Add testimonials section
- Integrate with CMS

---

**Last Updated**: December 2025
**Project Status**: Production Ready
