# Modisoft Clone - Modern Software Solutions Website

A professional, modern website clone built with Next.js 15, TypeScript, and Tailwind CSS. This project showcases a complete business website with responsive design, smooth animations, and modern UI/UX practices.

## 🔒 Security

**Latest Update:** Upgraded to Next.js 15.5.12 to address critical security vulnerabilities including DoS attacks and authorization bypass issues. The project now has **zero npm audit vulnerabilities**.

## 🚀 Features

- ⚡ Built with Next.js 15.5.12 (App Router) - Security Patched
- 🔷 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎭 Smooth animations and transitions
- ♿ Accessibility best practices
- 🔍 SEO optimized
- 🎯 Clean, maintainable code structure
- 🔒 Zero security vulnerabilities

## 📋 Sections

- **Hero Section**: Compelling headline with call-to-action buttons and stats
- **Services**: Grid layout showcasing six key service offerings
- **About**: Company overview with mission and key differentiators
- **Portfolio**: Project showcase grid with 6 sample projects
- **Testimonials**: Client testimonials with ratings
- **Contact**: Working contact form with contact information
- **Footer**: Site map with social links

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.12 (Security Patched)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.17
- **Font**: System fonts (optimized for performance)
- **Icons**: SVG icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/beetsolutions/modisoft-clone.git
cd modisoft-clone
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
modisoft-clone/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx    # Header with mobile menu
│   │   ├── Hero.tsx          # Hero section with CTA
│   │   ├── Services.tsx      # Services grid
│   │   ├── About.tsx         # About section
│   │   ├── Portfolio.tsx     # Portfolio grid
│   │   ├── Testimonials.tsx  # Client testimonials
│   │   ├── Contact.tsx       # Contact form
│   │   └── Footer.tsx        # Footer with links
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── public/
│   └── images/               # Image assets
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
├── postcss.config.js         # PostCSS configuration
└── package.json              # Dependencies and scripts
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors

The project uses a custom color scheme defined in `tailwind.config.ts`. You can modify the primary and secondary colors to match your brand:

```typescript
colors: {
  primary: {
    // Your custom primary colors
  },
  secondary: {
    // Your custom secondary colors
  },
}
```

### Content

All content can be easily modified in the respective component files:
- Update text, headings, and descriptions directly in component files
- Modify service offerings in `Services.tsx`
- Update portfolio projects in `Portfolio.tsx`
- Change testimonials in `Testimonials.tsx`

### Styling

Global styles are in `app/globals.css`. Component-specific styles use Tailwind utility classes.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

Build the project:
```bash
npm run build
```

The output will be in the `.next` folder. Follow your hosting provider's instructions for deploying Next.js applications.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states for all interactive elements
- Alt text for images (when added)

## 🔒 TypeScript

The project uses TypeScript strict mode for type safety. All components are properly typed.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Built with ❤️ by the Modisoft team

## 📞 Support

For support, email info@modisoft.com or visit our contact page.

---

Made with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
