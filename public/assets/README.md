# Public Assets Directory

This folder contains static assets for the portfolio.

## Recommended Structure

```
assets/
├── images/
│   ├── profile.jpg       # Your profile photo
│   ├── og-image.jpg      # Open Graph image for social sharing
│   └── favicon.ico       # Site favicon
│
├── projects/
│   ├── project-1.png     # Project screenshots
│   ├── project-2.png
│   └── ...
│
└── icons/
    └── ...               # Custom icons if needed
```

## Image Guidelines

- **Profile Photo**: 400x400px minimum, square aspect ratio
- **Project Images**: 1200x630px recommended for cards
- **OG Image**: 1200x630px for social media sharing
- **Favicon**: Multiple sizes (16x16, 32x32, 180x180)

## Optimization Tips

1. Use WebP format for better compression
2. Compress images with tools like TinyPNG
3. Use Next.js Image component for automatic optimization
