import { defineConfig } from "vitepress";

export default defineConfig({
  title: "LUI",
  description: "Vue core components and Astro-facing design system for LLLgoyour sites.",
  themeConfig: {
    nav: [
      { text: "Overview", link: "/" },
      { text: "Tokens", link: "/tokens" },
      { text: "Vue", link: "/vue" },
      { text: "Astro", link: "/astro" },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Overview", link: "/" },
          { text: "Tokens", link: "/tokens" },
          { text: "Vue Components", link: "/vue" },
          { text: "Astro Adapters", link: "/astro" },
        ],
      },
    ],
  },
});
