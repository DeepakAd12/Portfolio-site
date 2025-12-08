# Deepak Portfolio - Contribution Guide

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone <your-fork-url>`
3. Create a feature branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Commit: `git commit -m "Add: description of changes"`
6. Push: `git push origin feature/your-feature-name`
7. Open a Pull Request

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements
- Use lowercase for all tags and attributes
- Indent with 4 spaces
- Add comments for complex sections

### CSS
- Use CSS variables for repeated values
- Follow mobile-first approach
- Group related styles together
- Use meaningful class names (BEM convention)
- Indent with 4 spaces

### JavaScript
- Use ES6+ syntax
- Add comments for complex logic
- Use const/let instead of var
- Avoid global variables
- Use meaningful variable names

## Commit Message Format

```
Type: Description

Detailed description if needed

- Bullet point for specific changes
- Another specific change
```

### Types
- `Add:` - New feature or content
- `Fix:` - Bug fix
- `Update:` - Updates to existing features
- `Refactor:` - Code improvement without new features
- `Docs:` - Documentation updates
- `Style:` - CSS or styling changes

## Pull Request Process

1. **Before Submitting**
   - Test changes on desktop and mobile
   - Verify no console errors
   - Check responsive design at breakpoints
   - Update README if needed

2. **PR Description**
   - Describe what changes were made
   - Explain why the changes were made
   - Link any related issues
   - Include screenshots if visual changes

3. **Review Process**
   - Address feedback from reviewers
   - Make requested changes in new commits
   - Mark conversations as resolved

## Testing

- Test responsive design: 1920px, 768px, 480px widths
- Test on different browsers: Chrome, Firefox, Safari, Edge
- Check mobile on actual devices if possible
- Verify all links work correctly
- Check form submissions if applicable

## Performance Guidelines

- Keep CSS file sizes minimal
- Use efficient selectors
- Minimize JavaScript
- Optimize images (max 100KB for web)
- Lazy load images when possible

## Issues

When creating issues, please include:
- Clear title describing the issue
- Steps to reproduce (if bug)
- Expected vs actual behavior
- Screenshots or screen recording if applicable
- Browser and device information

## Questions?

Feel free to open a discussion or issue with your question. We're here to help!

---

**Last Updated**: December 2025
