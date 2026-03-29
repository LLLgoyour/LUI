import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import LTagChip from "../src/components/LTagChip.vue";

describe("LTagChip", () => {
  it("renders a link chip with generated hue style", () => {
    const wrapper = mount(LTagChip, {
      props: {
        label: "astro",
        href: "/tags/astro",
        variant: "muted",
      },
    });

    expect(wrapper.attributes("href")).toBe("/tags/astro");
    expect(wrapper.classes()).toContain("lui-tag-chip--muted");
    expect(wrapper.attributes("style")).toContain("--lui-tag-h");
  });
});
