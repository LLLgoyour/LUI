# Tokens

LUI keeps the current site's existing palette and typography, then exposes them as reusable CSS variables.

## Public Entrypoints

```css
@import "@lllgoyour/lui-tokens/theme.css";
@import "@lllgoyour/lui-styles/base.css";
@import "@lllgoyour/lui-styles/prose.css";
```

## Theme Categories

- typography: base, display, and mono font families
- color: text, muted text, accent, background, raw background, line, surface
- spacing: `--lui-space-1` through `--lui-space-7`
- radius: small, medium, large, and pill
- motion: fast and medium interaction timing

## Compatibility Layer

The token file also preserves the site's existing variables such as `--main-color`, `--accent`, and `--surface-elevated`, so the Astro consumer can migrate incrementally without rewriting every page-level style rule at once.
