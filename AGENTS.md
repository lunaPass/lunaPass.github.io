# AGENTS.md

## Project Type
React SPA + Vite

## Commands
```bash
npm run dev      # Start dev server
npm run build   # Production build
npm run preview # Preview production build
npm run lint    # ESLint check
```

## Key Files
- `src/App.jsx` - Main entry point
- `src/components/` - Components (Navbar, Hero, Work, About, Contact, Footer, Cursor)
- `public/setup-image.png` - Hero background

## Verification
Run `npm run lint` before committing.

## Notes
- Contact form uses Web3Forms API (`src/components/Contact.jsx:4`)
- Custom cursor hidden on mobile (<768px)
- Google Fonts (Outfit, Ubuntu, Dancing Script) loaded via CDN in `index.html`