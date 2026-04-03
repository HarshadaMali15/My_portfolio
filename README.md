# Full Stack Developer Portfolio

A stunning, modern, fully-responsive portfolio website built for Full Stack NextJS Developer roles. Features smooth scroll animations, dark/light mode toggle, and a professional design showcasing your skills, experience, and projects.

## ✨ Features

### 🎨 Modern Design
- **Blue & Purple Gradient Theme** - Professional, modern color scheme
- **Glass Morphism Effects** - Elegant transparency and blur effects
- **Gradient Text & Backgrounds** - Eye-catching visual hierarchy
- **Smooth Transitions** - 300ms transitions on all interactive elements

### 🎬 Smooth Animations
- **AOS (Animate on Scroll)** - Elements animate as you scroll
- **Scroll-triggered effects** - Fade, slide, and zoom animations
- **Staggered animations** - Beautiful cascade effect on element groups
- **Customizable duration** - Easy to adjust animation speed

### 🌓 Dark/Light Mode
- **One-click toggle** - Seamless theme switching
- **Persistent preference** - Saved using localStorage
- **System detection** - Respects OS theme preference
- **Smooth color transitions** - No jarring color changes

### 📱 Fully Responsive
- **Mobile-first design** - Optimized for all devices
- **Hamburger menu** - Compact navigation on mobile
- **Adaptive layouts** - Grid and flexbox responsiveness
- **Touch-friendly** - Large, tappable buttons and links

### ⚡ Performance Optimized
- **Next.js 16 Turbopack** - Lightning-fast builds
- **Code splitting** - Automatic route code splitting
- **Image optimization** - Next.js Image component
- **Lazy loading** - Components load on demand

## 📋 Sections Included

1. **Navigation** - Sticky header with theme toggle
2. **Hero Section** - Eye-catching intro with CTA buttons
3. **About** - Professional bio and statistics
4. **Skills** - Categorized skills with progress bars
5. **Experience** - Internship details & certificate section
6. **Projects** - Academic/professional project showcase
7. **Contact** - Contact form and social links
8. **Footer** - Copyright and build information

## 🚀 Quick Start

### 1. Install Dependencies
```bash
pnpm install
```
Dependencies auto-install, but you can manually install if needed.

### 2. Run Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
pnpm build
pnpm start
```

### 4. Customize Your Portfolio
Follow the guides:
- **Quick Start**: See "Customization" section below
- **Detailed Guide**: Read `PORTFOLIO_GUIDE.md`
- **Checklist**: Use `CUSTOMIZATION_CHECKLIST.md`
- **File Reference**: Check `FILE_REFERENCE.md`

## 🎯 Customization (5-Minute Setup)

### Update Personal Information

**Email & Phone** (`components/sections/about.tsx` & `contact.tsx`)
```tsx
// Change:
<span>yourmail@example.com</span>

// To:
<span>your.email@gmail.com</span>
```

**Social Links** (`components/sections/hero.tsx`)
```tsx
// Update GitHub link
<a href="https://github.com/yourusername">GitHub</a>

// Update LinkedIn link
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
```

### Update Your Skills

Edit `components/sections/skills.tsx`:
```tsx
const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'React.js', level: 88 },
      // Add your actual skills...
    ],
  },
];
```

### Update Experience

Edit `components/sections/experience.tsx`:
```tsx
const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Your Company Name',
    location: 'Your Location',
    duration: '8 Months',
    description: [
      'Your achievement 1',
      'Your achievement 2',
      // Add your achievements...
    ],
  },
];
```

### Add Projects

Edit `components/sections/projects.tsx`:
```tsx
{
  title: 'Your Project Name',
  description: 'What you built and why',
  technologies: ['React', 'Node.js', 'MongoDB'],
  links: {
    live: 'https://your-project-link.com',
    github: 'https://github.com/your-repo',
  },
}
```

### Add Certificate Image

1. Save your certificate to: `/public/images/certificate.jpg`
2. Update the certificate section in `components/sections/experience.tsx`
3. Add link to your certificate file

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── page.tsx                 # Main portfolio page
│   ├── layout.tsx               # Root layout with metadata
│   ├── layout-client.tsx        # Theme provider wrapper
│   └── globals.css              # Global styles & animations
│
├── components/
│   ├── navigation.tsx           # Top navigation bar
│   ├── theme-toggle.tsx         # Dark/light mode toggle
│   └── sections/
│       ├── hero.tsx             # Hero/landing section
│       ├── about.tsx            # About section
│       ├── skills.tsx           # Skills showcase
│       ├── experience.tsx       # Experience & certificate
│       ├── projects.tsx         # Projects grid
│       └── contact.tsx          # Contact form
│
├── public/
│   ├── images/
│   │   └── certificate.jpg      # Add your certificate here
│   ├── icon.svg
│   ├── icon-dark-32x32.png
│   └── icon-light-32x32.png
│
├── PORTFOLIO_GUIDE.md           # Detailed customization guide
├── CUSTOMIZATION_CHECKLIST.md   # Step-by-step checklist
├── FILE_REFERENCE.md            # Quick file location reference
├── IMPLEMENTATION_SUMMARY.md    # Technical overview
└── README.md                    # This file
```

## 🎨 Color Scheme

### Light Mode
- **Background**: Light blue-white (#F8FAFF)
- **Primary**: Vibrant Blue (#5850EC)
- **Secondary**: Purple (#7C5DFA)
- **Accent**: Indigo (#6366F1)

### Dark Mode
- **Background**: Deep Navy (#0F0A1F)
- **Primary**: Bright Blue (#8B7FFF)
- **Secondary**: Light Purple (#A899FF)
- **Accent**: Bright Indigo (#818CF8)

**To customize colors**, edit `/app/globals.css`:
```css
:root {
  --primary: oklch(0.55 0.24 275);      /* Change primary color */
  --secondary: oklch(0.65 0.2 255);     /* Change secondary color */
  --accent: oklch(0.6 0.25 270);        /* Change accent color */
}
```

## 🔧 Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: AOS (Animate on Scroll)
- **Theme**: next-themes
- **Icons**: Lucide React
- **UI Components**: shadcn/ui

## 📦 Dependencies

```json
{
  "dependencies": {
    "next": "16.2.0",
    "react": "^19",
    "aos": "^2.3.4",
    "next-themes": "^0.4.6",
    "lucide-react": "^0.564.0",
    "tailwindcss": "^4.2.0"
  }
}
```

## 🎬 Animation Configuration

All animations use the AOS library. Configure in `/app/page.tsx`:

```typescript
AOS.init({
  duration: 1000,      // Animation duration in milliseconds
  once: false,         // Animate on every scroll (false) or once (true)
  mirror: true,        // Animate when scrolling up/down
  easing: 'ease-out-cubic',
  offset: 50,          // Trigger animation 50px before element in viewport
});
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🚀 Deployment

### Deploy to Vercel (Recommended)

**Option 1: One-click Deploy**
1. Push code to GitHub
2. Import to Vercel
3. Auto-deploy on push

**Option 2: Manual Deploy**
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
- **Netlify**: Connect GitHub, auto-deploy
- **GitHub Pages**: Build and push to gh-pages branch
- **Self-hosted**: Build with `pnpm build`, serve with Node.js

## 📝 Essential Files to Edit

| File | Purpose | Edit For |
|------|---------|----------|
| `components/sections/about.tsx` | About section | Email, phone, bio |
| `components/sections/skills.tsx` | Skills showcase | Your skills & levels |
| `components/sections/experience.tsx` | Experience section | Internship details |
| `components/sections/projects.tsx` | Projects grid | Your projects |
| `components/sections/contact.tsx` | Contact section | Contact info |
| `app/globals.css` | Colors & animations | Theme colors |
| `app/layout.tsx` | Meta information | Title, description |

## 🎓 Learning Resources

- **Next.js**: https://nextjs.org/docs
- **TypeScript**: https://www.typescriptlang.org/docs/
- **Tailwind CSS**: https://tailwindcss.com
- **AOS Library**: https://michalsnik.github.io/aos/
- **React**: https://react.dev

## 📚 Documentation Files

- **`PORTFOLIO_GUIDE.md`** - Comprehensive customization guide
- **`CUSTOMIZATION_CHECKLIST.md`** - Step-by-step checklist
- **`FILE_REFERENCE.md`** - Quick file location reference
- **`IMPLEMENTATION_SUMMARY.md`** - Technical details

## ✅ Before Deployment

1. ✅ Update all personal information
2. ✅ Add your skills and experience
3. ✅ Add your projects with real links
4. ✅ Add your internship certificate image
5. ✅ Verify all social media links
6. ✅ Test responsive design
7. ✅ Test dark/light mode switching
8. ✅ Test animations on scroll
9. ✅ Test contact form
10. ✅ Build without errors: `pnpm build`

## 🐛 Troubleshooting

### Animations not showing?
- Check AOS is initialized in `app/page.tsx`
- Verify AOS CSS/JS are loaded from CDN in `app/layout.tsx`
- Check browser console for errors

### Dark mode not working?
- Ensure `layout-client.tsx` has ThemeProvider
- Check `next-themes` is installed
- Clear browser cache and localStorage

### Responsive design issues?
- Test with Chrome DevTools responsive mode
- Check Tailwind breakpoints in global styles
- Verify mobile menu hamburger works

### Deployment issues?
- Run `pnpm build` locally to test
- Check build output for errors
- Verify environment variables are set
- Check Vercel deployment logs

## 💡 Pro Tips

1. **Faster Animations**: Reduce `duration` value in AOS init
2. **More Effects**: Add more AOS data attributes to elements
3. **Custom Fonts**: Import from Google Fonts in `app/layout.tsx`
4. **Email Integration**: Use EmailJS or Nodemailer for contact form
5. **Analytics**: Add Google Analytics or Vercel Analytics
6. **SEO**: Update meta tags in `app/layout.tsx`

## 📞 Support

If you encounter issues:

1. Check the documentation files in this project
2. Review the code comments for guidance
3. Check Next.js and Tailwind CSS documentation
4. Test in development mode: `pnpm dev`
5. Check browser console for errors

## 📄 License

This portfolio template is provided as-is. Feel free to customize and use for your own portfolio.

## 🎉 You're All Set!

Your modern portfolio is ready. Next steps:

1. **Customize**: Update your personal information
2. **Test**: Run `pnpm dev` and preview locally
3. **Deploy**: Push to GitHub and deploy to Vercel
4. **Share**: Share your portfolio link

Good luck with your Full Stack Developer applications! 🚀

---

**Built with Next.js 16, Tailwind CSS, TypeScript, and AOS Animations**

Last Updated: 2024 | Created with v0
