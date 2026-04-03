# Full Stack Developer Portfolio

An aesthetic, modern portfolio built with Next.js, Tailwind CSS, and TypeScript. Features smooth animations, dark/light mode, and a fully responsive design.

## Features

✨ **Modern Design**
- Beautiful gradient color scheme (Blue & Purple)
- Smooth scroll animations with AOS library
- Responsive mobile-first design
- Glass morphism effects

🌓 **Dark/Light Mode**
- Seamless theme switching with next-themes
- Persistent theme preference
- Smooth color transitions

📱 **Fully Responsive**
- Mobile-first approach
- Hamburger menu for mobile devices
- Optimized for all screen sizes

⚡ **Performance**
- Next.js 16 with Turbopack
- Image optimization
- Lazy loading
- Code splitting

## Project Structure

```
/components
  /sections          # Page sections (Hero, About, Skills, etc.)
    - hero.tsx
    - about.tsx
    - skills.tsx
    - experience.tsx
    - projects.tsx
    - contact.tsx
  - navigation.tsx    # Main navigation bar
  - theme-toggle.tsx  # Dark/light mode toggle

/app
  - page.tsx          # Main portfolio page
  - layout.tsx        # Root layout
  - layout-client.tsx # Theme provider
  - globals.css       # Global styles & animations

/public             # Static assets
```

## Customization Guide

### 1. **Update Personal Information**

#### About Section (`components/sections/about.tsx`)
```tsx
// Update contact information
<Mail className="w-5 h-5 text-primary" />
<span>yourmail@example.com</span>  // Change this

<Phone className="w-5 h-5 text-primary" />
<span>+91 XXX-XXX-XXXX</span>  // Change this
```

#### Contact Section (`components/sections/contact.tsx`)
```tsx
// Update email and phone
<a href="mailto:yourmail@example.com">
  yourmail@example.com
</a>

<a href="tel:+91XXXXXXXXXX">
  +91 XXX-XXX-XXXX
</a>
```

### 2. **Update Social Links**

Update GitHub, LinkedIn, and other social media links in:
- **Hero Section** (`components/sections/hero.tsx`)
- **Contact Section** (`components/sections/contact.tsx`)
- **Navigation** (`components/navigation.tsx`)

```tsx
<a
  href="https://github.com/yourusername"
  target="_blank"
  rel="noopener noreferrer"
>
  GitHub
</a>
```

### 3. **Customize Skills**

Edit `components/sections/skills.tsx` to add your skills:

```tsx
const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'Your Skill', level: 90 },
      // Add more skills...
    ],
  },
  // Add more categories...
];
```

### 4. **Update Experience**

Modify `components/sections/experience.tsx`:

```tsx
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Your Company',
    location: 'Your Location',
    duration: '8 Months',
    description: [
      'Your achievement 1',
      'Your achievement 2',
      // Add more...
    ],
    skills: ['Skill1', 'Skill2', 'Skill3'],
  },
];
```

### 5. **Update Projects**

Edit `components/sections/projects.tsx`:

```tsx
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description...',
    image: 'bg-gradient-to-br from-primary/30 to-secondary/30',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    links: {
      live: 'https://your-project-link.com',
      github: 'https://github.com/yourrepo',
    },
    features: ['Feature 1', 'Feature 2'],
  },
];
```

### 6. **Add Internship Certificate**

1. Add your certificate image to `/public/images/`
2. Update the Experience section to link to your certificate:

```tsx
// In experience.tsx
const certificateImage = '/images/your-certificate.jpg';
```

### 7. **Customize Colors**

Edit `/app/globals.css` to change the theme colors:

```css
:root {
  --primary: oklch(0.55 0.24 275);      /* Change primary color */
  --secondary: oklch(0.65 0.2 255);     /* Change secondary color */
  --accent: oklch(0.6 0.25 270);        /* Change accent color */
  /* ... more color customization ... */
}

.dark {
  --primary: oklch(0.7 0.25 280);
  --secondary: oklch(0.65 0.2 255);
  /* ... more dark mode colors ... */
}
```

### 8. **Update Meta Information**

Edit `/app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Your Name - Full Stack Developer',
  description: 'Your custom description',
};
```

## Adding Content

### Certificate Image Upload

1. Place your certificate image in `/public/images/certificate.jpg`
2. Update the certificate section in `components/sections/experience.tsx`

### Hero Image/Visual

The hero section has a code snippet visual. Customize it in `components/sections/hero.tsx`:

```tsx
<div className="text-xs text-muted-foreground font-mono whitespace-pre-wrap p-4 overflow-hidden">
  {`// Your custom code snippet here`}
</div>
```

## Colors & Theming

The portfolio uses a modern blue & purple theme with:
- **Primary**: Blue (#5850EC)
- **Secondary**: Purple (#7C5DFA)
- **Accent**: Indigo
- **Light Mode**: Clean white backgrounds
- **Dark Mode**: Deep navy backgrounds

## Animations

The portfolio uses:
- **AOS Library**: Scroll-based animations (fade, slide, zoom)
- **Custom CSS**: Floating elements, glowing effects
- **Tailwind CSS**: Smooth transitions and hover effects

To customize animations, edit:
1. AOS configuration in `/app/page.tsx`
2. Custom keyframes in `/app/globals.css`

```tsx
// In page.tsx
AOS.init({
  duration: 1000,      // Animation duration
  once: false,         // Animate every scroll
  mirror: true,        // Animate on scroll up
  offset: 50,          // Trigger offset
});
```

## Deployment

Deploy to Vercel with one click:

```bash
# Build locally
npm run build

# Deploy to Vercel
vercel deploy
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Animations**: AOS (Animate on Scroll)
- **Theme**: next-themes
- **Icons**: Lucide React
- **UI Components**: shadcn/ui

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. **Compress Images**: Use tools like TinyPNG for project images
2. **Optimize Fonts**: The portfolio uses system fonts by default
3. **Lazy Loading**: Images are lazy-loaded automatically
4. **Code Splitting**: Routes are automatically code-split by Next.js

## Need Help?

- Check the inline comments in each component
- Review the Tailwind CSS documentation: https://tailwindcss.com
- Learn about AOS: https://michalsnik.github.io/aos/
- Next.js Docs: https://nextjs.org/docs

---

Built with ❤️ using v0
