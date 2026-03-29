# LUI

LUI is the first-stage design system for LLLgoyour's personal sites.

The repository now has two jobs:

- provide a Vue 3 component core for future interactive widgets
- provide framework-agnostic tokens and styles that Astro can consume today

## Packages

- `@lllgoyour/lui-tokens`: theme variables for light and dark mode
- `@lllgoyour/lui-styles`: base, layout, prose, navigation, surface, and tag styles
- `@lllgoyour/lui-astro`: thin Astro adapters such as `SiteShell`, `HeaderNav`, `FooterBar`, `IntroSurface`, `TagList`, and `TagChip`
- `@lllgoyour/lui-vue`: first-stage Vue components `LButton`, `LTagChip`, and `LSurface`

## Tooling

- `pnpm` workspace
- `VitePress` for docs
- `Vite + Vitest + Vue Test Utils` for the Vue package

## Public CSS Entrypoints

- `@lllgoyour/lui-tokens/theme.css`
- `@lllgoyour/lui-styles/base.css`
- `@lllgoyour/lui-styles/prose.css`

## Local Development

This repo now expects `Node.js 20+` and `pnpm`.

```bash
pnpm install
pnpm typecheck
pnpm test
pnpm build
pnpm docs:dev
```

## First Consumer

The intended first consumer is `lllgoyour.com/public_html`, which imports the token, style, and Astro packages through local `file:` dependencies during this stage.
