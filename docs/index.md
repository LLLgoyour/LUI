---
title: LUI Overview
layout: doc
---

<script setup>
import LButton from "../packages/vue/src/components/LButton.vue";
import LSurface from "../packages/vue/src/components/LSurface.vue";
import LTagChip from "../packages/vue/src/components/LTagChip.vue";
</script>

# LUI

LUI is now split into a token layer, a style layer, Astro adapters, and a small Vue core.

## Package Layout

- `@lllgoyour/lui-tokens` provides theme variables for both light and dark mode.
- `@lllgoyour/lui-styles` provides the framework-agnostic shell used by the Astro site.
- `@lllgoyour/lui-astro` wraps the shell into reusable Astro components.
- `@lllgoyour/lui-vue` keeps the interactive core small and intentional.

## Live Preview

<LSurface tone="default">
  <div style="display:grid; gap: 0.9rem;">
    <div>
      <h2 style="margin:0;">Warm Fluent Direction</h2>
      <p style="margin:0.35rem 0 0; color: var(--gray-color);">
        The first stage keeps the current site's warmer editorial tone while establishing reusable primitives.
      </p>
    </div>
    <div style="display:flex; flex-wrap:wrap; gap:0.6rem;">
      <LButton>Primary action</LButton>
      <LButton variant="neutral">Secondary</LButton>
      <LButton variant="ghost" size="sm">Ghost</LButton>
      <LTagChip label="astro" />
      <LTagChip label="fluent" variant="muted" />
    </div>
  </div>
</LSurface>

## What Ships In Stage One

- tokenized light and dark themes
- base typography and prose styling
- header, footer, intro surface, and tag adapters for Astro
- three Vue primitives: button, surface, and tag chip
