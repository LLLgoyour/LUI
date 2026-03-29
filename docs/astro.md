# Astro Adapters

The Astro package keeps rendering on the Astro side and only wraps reusable shell markup. It does not own content fetching, search logic, comments, or blog data.

## Included Adapters

- `SiteShell.astro`
- `HeaderNav.astro`
- `FooterBar.astro`
- `IntroSurface.astro`
- `TagList.astro`
- `TagChip.astro`

## Example

```astro
---
import SiteShell from "@lllgoyour/lui-astro/components/SiteShell.astro";
import HeaderNav from "@lllgoyour/lui-astro/components/HeaderNav.astro";
import FooterBar from "@lllgoyour/lui-astro/components/FooterBar.astro";
import IntroSurface from "@lllgoyour/lui-astro/components/IntroSurface.astro";
---

<SiteShell mainClass="home-main">
  <HeaderNav slot="header" brandLabel="春" currentPath={Astro.url.pathname} navItems={navItems} />
  <IntroSurface>
    <h1>Prelude</h1>
    <p>Reusable shell, site-owned content.</p>
  </IntroSurface>
  <FooterBar slot="footer" owner="LLLgoyour" />
</SiteShell>
```

## Tag Utility

`@lllgoyour/lui-astro/utils/tag` exports `getTagHue()` and `getTagStyle()` for page-level cases that still need tag color metadata, such as archive sidebars with per-tag counts.
