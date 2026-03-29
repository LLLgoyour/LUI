---
title: Vue Components
---

<script setup>
import LButton from "../packages/vue/src/components/LButton.vue";
import LSurface from "../packages/vue/src/components/LSurface.vue";
import LTagChip from "../packages/vue/src/components/LTagChip.vue";
</script>

# Vue Components

The Vue package is intentionally small in stage one. It exists to prove the component API direction without forcing the Astro site to become Vue-heavy.

## `LButton`

<div style="display:flex; flex-wrap:wrap; gap:0.6rem; margin: 1rem 0 1.2rem;">
  <LButton>Accent</LButton>
  <LButton variant="neutral">Neutral</LButton>
  <LButton variant="ghost">Ghost</LButton>
  <LButton size="sm">Small</LButton>
  <LButton size="lg">Large</LButton>
</div>

```vue
<LButton variant="accent" size="md">Publish</LButton>
```

## `LSurface`

<LSurface tone="muted">
  <p style="margin:0;">
    Surfaces are used for intro panels, search controls, and future settings panes.
  </p>
</LSurface>

```vue
<LSurface tone="muted">
  <slot />
</LSurface>
```

## `LTagChip`

<div style="display:flex; flex-wrap:wrap; gap:0.6rem; margin-top: 1rem;">
  <LTagChip label="astro" />
  <LTagChip label="typst" />
  <LTagChip label="search" variant="muted" />
</div>

```vue
<LTagChip label="astro" />
<LTagChip label="search" variant="muted" />
```
