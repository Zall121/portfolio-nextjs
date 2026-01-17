# Portfolio - Modern Next.js Developer Portfolio

A stunning, modern portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion. Features a dark theme with neon blue/purple accents and terminal-inspired design elements.

## ✨ Features

- 🌙 **Dark Mode** - Sleek dark theme with neon accents
- 🎨 **Modern Design** - Terminal/code-inspired aesthetics
- ⚡ **Responsive** - Mobile-first responsive design
- 🎭 **Animations** - Smooth Framer Motion animations
- 📱 **ReactBits Components** - Lanyard, AnimatedText, and more
- 🔍 **SEO Ready** - Proper meta tags and semantic HTML
- 🚀 **Vercel Ready** - Optimized for Vercel deployment

## 📁 Project Structure

```
portfolio-nextjs/
│
├── app/
│   ├── layout.jsx          # Root layout with metadata
│   ├── page.jsx             # Main page with all sections
│   ├── globals.css          # Global styles & Tailwind
│   └── components/
│       ├── Hero.jsx         # Hero section with Lanyard
│       ├── LanyardSection.jsx   # Developer ID card component
│       ├── AnimatedText.jsx     # Typing/fade/glitch text
│       ├── About.jsx        # About me section
│       ├── Skills.jsx       # Skills grid with progress
│       ├── Projects.jsx     # Project cards
│       ├── Experience.jsx   # Timeline experience
│       └── Contact.jsx      # Contact form & info
│
├── data/
│   ├── skills.js            # Skills data array
│   ├── projects.js          # Projects data array
│   └── experience.js        # Experience & education data
│
├── lib/
│   └── reactbits.js         # Animation utilities & configs
│
├── public/
│   └── assets/              # Static assets (images, icons)
│
├── tailwind.config.js       # Tailwind configuration
├── package.json             # Dependencies
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. **Create a new Next.js project** (if starting fresh):

```bash
npx create-next-app@latest portfolio-nextjs --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
```

2. **Install dependencies**:

```bash
cd portfolio-nextjs
npm install framer-motion
```

3. **Copy the provided files** into your project structure.

4. **Run the development server**:

```bash
npm run dev
```

5. **Open your browser** at [http://localhost:3000](http://localhost:3000)

## 📦 Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "framer-motion": "^10.16.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.3.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0"
  }
}
```

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  neon: {
    blue: '#00d4ff',    // Primary accent
    purple: '#a855f7',  // Secondary accent
    pink: '#ec4899',    // Tertiary accent
  },
  dark: {
    900: '#0a0a0f',     // Darkest background
    800: '#0d0d14',
    700: '#12121a',     // Card backgrounds
  }
}
```

### Updating Content

1. **Personal Info**: Edit `app/components/Hero.jsx` and `app/components/LanyardSection.jsx`
2. **Skills**: Edit `data/skills.js`
3. **Projects**: Edit `data/projects.js`
4. **Experience**: Edit `data/experience.js`

### Adding Images

1. Place images in `public/assets/`
2. Reference them as `/assets/your-image.png`

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🎭 Components Overview

### AnimatedText
Supports multiple animation types:
- `typing` - Typewriter effect with cursor
- `fade` - Fade in/out text rotation
- `glitch` - Cyberpunk glitch effect
- `gradient` - Animated gradient colors
- `reveal` - Letter-by-letter reveal

```jsx
<AnimatedText 
  texts={['Developer', 'Designer', 'Creator']}
  type="typing"
  speed={100}
/>
```

### LanyardSection
A developer ID card with floating animation:

```jsx
<LanyardSection
  name="John Doe"
  role="Full Stack Developer"
  status="Available for Work"
  statusColor="#22c55e"
/>
```

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🙏 Credits

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Inter Font](https://fonts.google.com/specimen/Inter)
- [JetBrains Mono Font](https://fonts.google.com/specimen/JetBrains+Mono)

---

Made with ❤️ and ☕ by [Your Name]
