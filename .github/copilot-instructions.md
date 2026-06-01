# Copilot Instructions

## Project Overview

This is a **Preact + Vite + TypeScript** single-page application used as a **browser start page**, designed to work across multiple device types: mobile, tablet, and desktop.

- **Framework**: [Preact](https://preactjs.com/) with `preact-iso` for routing
- **Build tool**: [Vite](https://vitejs.dev/)
- **Language**: TypeScript
- **Entry point**: `src/index.tsx`
- **Routing**: File-based pages under `src/pages/`

## Project Structure

```
src/
  components/   # Shared/reusable components
  pages/        # Route-based page components
    Landing/    # Root route "/"
    _404.tsx    # Fallback 404 route
  style.css     # Global styles
  index.tsx     # App entry point
```

## Development

- `npm run dev` — start dev server at http://localhost:5173
- `npm run build` — production build (output: `dist/`)
- `npm run preview` — preview production build at http://localhost:4173

## Code Conventions

- **Indentation**: 2 spaces (enforced via `.editorconfig`)
- Use **functional components** with Preact's JSX
- File extensions in imports use `.jsx` (even for `.tsx` source files) — Vite resolves them
- Co-locate page-level styles in the same directory as the page component (e.g., `pages/Home/style.css`)
- Keep components small and focused; extract reusable UI to `src/components/`
- Prefer TypeScript types over interfaces for simple shapes

## Deferred Design Decisions

Several design decisions have not been made yet and will be decided as the project evolves. **Do not assume or introduce** any of the following without first asking the user:

- CSS approach or library (e.g., plain CSS, CSS Modules, Tailwind, styled-components)
- Icon font or icon library (e.g., Font Awesome, Material Icons, Heroicons)
- UI component library (e.g., none, Radix, shadcn)
- Any other tooling or dependency not already in `package.json`

When a task requires one of these decisions, **stop and ask the user** before proceeding. Propose clear options with brief trade-offs to help them decide.

## Linting

ESLint is configured via `eslintConfig` in `package.json` using `eslint-config-preact`.
