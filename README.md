# Website

A modern, responsive personal website built with Next.js, featuring a blog, CV, and contact page.

## Features

- **Responsive Design**: Works perfectly on mobile, tablet, and desktop devices
- **Blog System**: Markdown-based blog with automatic parsing and syntax highlighting
- **Professional CV**: Beautifully formatted CV page
- **Contact Page**: Contact form and social media links
- **Navigation**: Fixed navigation bar throughout the site
- **Social Links**: Integration with GitHub, LinkedIn, ResearchGate, and Bluesky

## Technologies Used

- **Next.js 14**: React framework with app router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Markdown**: Blog posts written in markdown with frontmatter
- **Lucide React**: Beautiful, customizable icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your personal information:

- `app/components/Navigation.tsx`: Update social links
- `app/page.tsx`: Update hero section content
- `app/cv/page.tsx`: Update CV content, experience, education, skills
- `app/contact/page.tsx`: Update contact information

### Blog Posts

Add new blog posts by creating markdown files in the `content/blog/` directory. Each post should have frontmatter:

```markdown
---
title: "Your Post Title"
date: "2024-03-15"
excerpt: "Brief description of your post"
readTime: "5 min read"
---

# Your Post Content

Write your blog post content here in markdown.
```

### Styling

The website uses Tailwind CSS for styling. You can customize:

- Colors: Edit the `primary` color palette in `tailwind.config.js`
- Typography: Modify the typography settings in `tailwind.config.js`
- Components: Custom component styles are in `app/globals.css`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `out/` directory (configured for static export).

## Deployment

The site is configured for static export and can be deployed to:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Deploy the `out/` directory after running `npm run build`
- **GitHub Pages**: Deploy the static files from the `out/` directory
- **Any static hosting service**: Upload the contents of `out/` directory

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   ├── blog/              # Blog pages
│   ├── cv/                # CV page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── content/
│   └── blog/              # Markdown blog posts
├── lib/
│   └── blog.ts            # Blog utilities
├── public/                # Static assets
└── package.json
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and Tailwind CSS 