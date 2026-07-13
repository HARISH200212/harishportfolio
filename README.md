# Harish R — Portfolio

A modern, dark-themed developer portfolio built with **Next.js 14** (App Router).

## ✨ Features

- **Hero** — animated typewriter role switcher, glowing background orbs, stats
- **About** — bio, info cards, skill tags
- **Skills** — categorized tech stack + infinite marquee
- **Projects** — interactive tab panel with ScamShield.AI, Bus Tracker, Vintage Vault
- **Certifications** — cards for all 3 certs + education block
- **Contact** — contact links + CTA card
- **Navbar** — sticky with blur, smooth scroll, mobile hamburger menu
- Scroll-triggered animations using `react-intersection-observer`
- Grain texture overlay, CSS grid background, floating glow orbs
- Fully responsive (mobile-first)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
harish-portfolio/
├── app/
│   ├── globals.css        # Design tokens, base styles
│   ├── layout.js          # Root layout with fonts & metadata
│   └── page.js            # Main page
├── components/
│   ├── Navbar.js / .module.css
│   ├── Hero.js / .module.css
│   ├── About.js / .module.css
│   ├── Skills.js / .module.css
│   ├── Projects.js / .module.css
│   ├── Certifications.js / .module.css
│   ├── Contact.js / .module.css
│   └── Footer.js / .module.css
└── package.json
```

## 🛠 Tech Stack

- **Next.js 14** — App Router, server components
- **CSS Modules** — scoped styling, no Tailwind needed
- **Framer Motion** — installed (ready to use for more animations)
- **react-intersection-observer** — scroll-triggered reveals
- **Google Fonts** — Syne (display) + DM Mono (code)

## 🎨 Design

- **Theme**: Dark, with yellow-green (`#e8ff47`) and teal (`#00e5c3`) accents
- **Fonts**: Syne (bold display headings) + DM Mono (labels, tags, code)
- **Effects**: Grain overlay, CSS grid background, radial glow orbs, marquee

## 🔧 Customization

Update `components/Projects.js` to add/edit projects.
Update `components/Skills.js` to edit your tech stack.
Update contact details in `components/Contact.js` and `components/Navbar.js`.
Colors and tokens live in `app/globals.css`.

## 🌐 Deployment

Works out of the box on [Vercel](https://vercel.com):

```bash
npx vercel
```

Or deploy to Netlify, Railway, or any Node.js host.
