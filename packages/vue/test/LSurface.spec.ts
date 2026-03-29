import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import LSurface from "../src/components/LSurface.vue";

describe("LSurface", () => {
  it("renders the chosen tag and tone classes", () => {
    const wrapper = mount(LSurface, {
      props: {
        as: "article",
        tone: "muted",
      },
      slots: {
        default: "Surface body",
      },
    });

    expect(wrapper.element.tagName).toBe("ARTICLE");
    expect(wrapper.classes()).toContain("lui-surface");
    expect(wrapper.classes()).toContain("lui-surface--muted");
    expect(wrapper.text()).toContain("Surface body");
  });
});
