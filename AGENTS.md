# AGENTS.md

## Project Type
React SPA + Vite (no build system required beyond `npm run dev`)

## Running the Site
```bash
npm run dev
```

## Key Files
- `src/App.jsx` - Main entry point, composes all sections
- `src/components/` - Individual components (Navbar, Hero, Work, About, Contact, Footer, Cursor)
- `public/setup-image.png` - Hero background image

## Commands
- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm run preview` - Preview production build

## Structure
```
src/
├── components/
│   ├── Navbar.jsx + .css
│   ├── Hero.jsx + .css
│   ├── Work.jsx + .css (portfolio with filter)
│   ├── About.jsx + .css (stats counters)
│   ├── Contact.jsx + .css
│   ├── Footer.jsx + .css
│   └── Cursor.jsx + .css
├── App.jsx + App.css (global vars)
├── main.jsx
└── index.css
```

## Notes
- Contact form requires backend integration
- Custom cursor hidden on mobile (768px)
- Google Fonts loaded via CDN in index.html