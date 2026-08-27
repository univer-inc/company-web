# AGENTS.md

## Project Overview

Next.js 14.1 company website for Univer Inc. (株式会社ウニベル). Japanese-language corporate site using App Router.

## Commands

- `npm run dev` — dev server on localhost:3000
- `npm run build` — production build
- `npm run lint` — ESLint (next/core-web-vitals + prettier)
- `npm start` — production server

No test suite, no CI, no typecheck script (use `npx tsc --noEmit`).

## Styling — Twin Macro + styled-components

This is the most important thing to get right. The project uses **twin.macro** to write Tailwind classes inside **styled-components**:

```tsx
import tw from 'twin.macro';

export const Section = tw.section`
  max-w-content
  mx-auto
  py-20
  lg-df:px-10
  sm-df:px-5
`;
```

- Use `tw` tagged template literal from `twin.macro` for component styling.
- Use `createGlobalStyle` from `styled-components` when mixing global CSS with Tailwind utilities.
- Do NOT use Tailwind `className` directly on JSX — always go through twin.macro.
- Tailwind `important: true` is set, so Tailwind classes override all other styles.

## Tailwind Config Quirks

- Content paths are `./app/**` and `./components/**` (stale — actual code is in `src/`). Twin macro resolves via Babel, not PostCSS, so this doesn't break anything.
- **Desktop-first responsive**: suffixes like `lg-df:`, `md-df:`, `sm-df:` are max-width breakpoints. Standard `sm:`, `md:`, `lg:` are min-width.
- Custom breakpoints include `content` (1400px) and `3xl` (1920px).
- Only 3 colors defined: `orange`, `black`, `white`. No gray scale.
- Custom font: `font-roboto` (loaded via Google Fonts link in layout, not next/font).

## Path Alias

`@/*` maps to `./src/*`. Both tsconfig and Babel (module-resolver) configure this.

## SVG as Components

SVGs are imported as React components via `@svgr/webpack`. Color attributes `#1a1311`, `#000000`, `#ffffff` are automatically replaced with `currentColor`.

## Server/Client Boundary

- `StyledComponentsRegistry` (`src/lib/registry.tsx`) must wrap the app — it handles SSR stylesheet collection for styled-components.
- Most page components use `'use client'` since they depend on styled-components hooks.
- Layout (`src/app/layout.tsx`) is a Server Component — it mounts the client-side registry.

## Source Structure

```
src/
  app/              — Next.js App Router pages
    _sections/      — Homepage section components (Hero, About, Info, Business, News, Contact)
  components/
    effect/         — Animation/intersection observer wrappers
    icon/           — SVG assets
    layout/         — Header, Footer, Main shell
    part/           — Shared UI primitives (Button, Heading, Section)
    style/          — GlobalStyle
  data/             — Static data (menu items, privacy policy text)
  hooks/            — Custom hooks
  lib/              — Utilities (styled-components registry, text helpers, type checks)
```

## Communication

- 本リポジトリへの指示や会話は**日本語**で行うこと。

## Conventions

- Two-space indent, single quotes, trailing commas (enforced by VS Code + Prettier).
- Components are named exports, not default exports.
- Page routes: single homepage at `src/app/page.tsx`, plus `/privacy-policy`.
