# Quick File Reference Guide

Use this guide to quickly find the files you need to edit.

## 🔧 Main Files to Customize

### Personal Information
```
📄 components/sections/about.tsx
   - Line 47: Email address
   - Line 53: Phone number  
   - Line 59: Location
   - Lines 21-29: Your bio/description

📄 components/sections/contact.tsx
   - Line 55: Email address
   - Line 66: Phone number
   - Line 77: Location
   - Lines 159-163: Contact form fields

📄 app/layout.tsx
   - Line 11: Website title
   - Line 12: Meta description
```

### Social Media Links
```
📄 components/sections/hero.tsx
   - Line 70: GitHub link
   - Line 77: LinkedIn link

📄 components/sections/contact.tsx
   - Line 155: GitHub link
   - Line 161: LinkedIn link
   - Line 167: Email link

📄 components/navigation.tsx
   - Add social links to menu (optional)
```

### Skills
```
📄 components/sections/skills.tsx
   - Lines 6-32: Frontend, Backend, Tools categories
   - Lines 34-46: Skill names and proficiency levels
   - Lines 88-95: Tech stack highlights (bottom grid)
```

### Experience & Internship
```
📄 components/sections/experience.tsx
   - Lines 28-45: Internship details
   - Lines 28-29: Job title and company
   - Line 30: Location
   - Line 31: Duration
   - Lines 34-40: Achievement bullet points
   - Line 42: Skills array
   - Lines 110-180: Certificate section
```

### Projects
```
📄 components/sections/projects.tsx
   - Lines 5-37: Project 1 details
   - Lines 39-73: Project 2 details
   - Update in each project:
     - title: Project name
     - description: Project description
     - technologies: Tech stack array
     - links.live: Live demo URL
     - links.github: GitHub repo URL
     - features: Key features array
```

### Colors & Theme
```
📄 app/globals.css
   - Lines 7-40: Light mode colors
   - Lines 43-74: Dark mode colors
   - Lines 126-234: Custom animations
```

## 📁 Project Structure

```
/app
├── page.tsx                    # Main page (Main portfolio)
├── layout.tsx                  # Root layout (Meta info & HTML setup)
├── layout-client.tsx           # Theme provider (Dark/light mode)
└── globals.css                 # Global styles & colors

/components
├── navigation.tsx              # Top navigation bar
├── theme-toggle.tsx            # Dark/light mode button
└── sections/
    ├── hero.tsx               # Hero/landing section
    ├── about.tsx              # About section
    ├── skills.tsx             # Skills section
    ├── experience.tsx         # Experience & certificate
    ├── projects.tsx           # Projects showcase
    └── contact.tsx            # Contact form

/public
├── images/
│   ├── certificate.jpg        # Add your internship certificate here
│   └── ...                    # Other images
├── icon.svg
├── icon-dark-32x32.png
└── icon-light-32x32.png

📄 PORTFOLIO_GUIDE.md           # Detailed customization guide
📄 CUSTOMIZATION_CHECKLIST.md   # Step-by-step checklist
📄 IMPLEMENTATION_SUMMARY.md    # What was built
└── 📄 FILE_REFERENCE.md        # This file
```

## 🎯 Quick Edit Locations

### Changing Your Name/Title
1. `app/layout.tsx` - Line 11 (page title)
2. `components/sections/hero.tsx` - Update heading text

### Updating Email
1. `components/sections/about.tsx` - Line 47
2. `components/sections/contact.tsx` - Line 55
3. `components/sections/contact.tsx` - Line 167 (email link)

### Updating Phone
1. `components/sections/about.tsx` - Line 53
2. `components/sections/contact.tsx` - Line 66

### Updating LinkedIn URL
1. `components/sections/hero.tsx` - Line 77
2. `components/sections/contact.tsx` - Line 161

### Updating GitHub URL
1. `components/sections/hero.tsx` - Line 70
2. `components/sections/contact.tsx` - Line 155

### Adding Certificate Image
1. Save image as: `/public/images/certificate.jpg`
2. Update: `components/sections/experience.tsx` (Certificate section)

### Changing Color Theme
1. `app/globals.css` - Lines 7-74 (all color definitions)
2. Light mode colors: `:root` section
3. Dark mode colors: `.dark` section

### Adjusting Animation Speed
1. `app/page.tsx` - Line 17 (AOS configuration)
2. Change `duration: 1000` to your preferred milliseconds

## 🔍 Search & Replace Locations

### Search for "yourmail@example.com"
- Replace in:
  - `components/sections/about.tsx`
  - `components/sections/contact.tsx`

### Search for "+91 XXX-XXX-XXXX"
- Replace in:
  - `components/sections/about.tsx`
  - `components/sections/contact.tsx`

### Search for "https://github.com"
- Replace in:
  - `components/sections/hero.tsx`
  - `components/sections/contact.tsx`

### Search for "https://linkedin.com"
- Replace in:
  - `components/sections/hero.tsx`
  - `components/sections/contact.tsx`

### Search for "Blue Planet Info Solutions"
- Replace in:
  - `components/sections/experience.tsx` (if company name is different)

## 📋 Component Functions

### Hero Section (`components/sections/hero.tsx`)
- Displays your name, title, and CTA buttons
- Shows animated code background
- Has social media links
- Includes gradient text effects

### About Section (`components/sections/about.tsx`)
- Your professional bio
- Contact information
- Statistics (months, projects, skills, commitment)
- Current focus highlight

### Skills Section (`components/sections/skills.tsx`)
- Organized skill categories
- Progress bars for each skill
- Tech stack highlights at bottom
- Grouped by Frontend, Backend, Tools

### Experience Section (`components/sections/experience.tsx`)
- Internship details
- Achievements and responsibilities
- Technologies used
- Certificate section with download button

### Projects Section (`components/sections/projects.tsx`)
- Project grid (2 projects shown)
- Project descriptions
- Technology tags
- Live demo and GitHub links
- Key features for each project

### Contact Section (`components/sections/contact.tsx`)
- Contact information display
- Social media links
- Working contact form
- Form validation

### Navigation (`components/navigation.tsx`)
- Fixed header navigation
- Hamburger menu for mobile
- Theme toggle button
- Sticky on scroll with blur effect

## 🛠️ Configuration Files

### `app/page.tsx`
- AOS (Animate on Scroll) initialization
- Duration: 1000ms (1 second)
- offset: 50px
- Change `duration` value to adjust animation speed

### `app/globals.css`
- All color definitions in OKLCh format
- Custom animations and keyframes
- Smooth scrolling configuration
- Scrollbar styling

### `app/layout.tsx`
- Meta information for SEO
- HTML lang attribute
- AOS library CDN link
- Analytics setup

### `package.json`
- Dependencies list
- Build scripts
- AOS version: ^2.3.4
- All required packages

## 🚀 Build & Deploy Files

### `next.config.mjs`
- Next.js configuration
- Turbopack setup (default in v16)

### `tsconfig.json`
- TypeScript configuration
- Path aliases (@/)
- Type checking settings

### `tailwind.config.ts`
- Tailwind CSS configuration
- Theme customization
- Color definitions

## 📱 Public Assets

### Images
```
/public/images/
├── certificate.jpg           # Add your internship certificate
├── profile.jpg              # Optional: profile photo
└── projects/                # Optional: project screenshots
```

### Icons
```
/public/
├── icon.svg                 # Main icon
├── icon-dark-32x32.png      # Dark mode icon
└── icon-light-32x32.png     # Light mode icon
```

## ✨ Important Notes

1. **TypeScript**: All components use TypeScript (.tsx)
2. **Client Components**: Components use 'use client' directive
3. **Tailwind CSS**: All styling via Tailwind utility classes
4. **Next.js Features**: Uses App Router pattern
5. **Animations**: AOS library for scroll animations
6. **Theme**: next-themes for dark/light mode

## 🎓 Example: Update Email

To update your email address:

1. Open: `components/sections/about.tsx`
   - Find line 47: `<span>yourmail@example.com</span>`
   - Replace with your email

2. Open: `components/sections/contact.tsx`
   - Find line 55: `<a href="mailto:yourmail@example.com">`
   - Replace with your email
   
3. Find line 167 in same file:
   - Find: `href="mailto:yourmail@example.com"`
   - Replace with your email

Done! Email updated across the portfolio.

## 🔗 Important CDN Links

These are loaded from CDN in `app/layout.tsx`:

1. **AOS CSS**: `https://unpkg.com/aos@2.3.4/dist/aos.css`
2. **AOS JS**: `https://unpkg.com/aos@2.3.4/dist/aos.js`

Both are automatically included in the layout.

---

For more detailed information, see:
- 📖 `PORTFOLIO_GUIDE.md` - Full customization guide
- ✅ `CUSTOMIZATION_CHECKLIST.md` - Step-by-step checklist
- 📋 `IMPLEMENTATION_SUMMARY.md` - What was built
