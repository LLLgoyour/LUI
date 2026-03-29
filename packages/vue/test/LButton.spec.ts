import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import LButton from "../src/components/LButton.vue";

describe("LButton", () => {
  it("renders variant, size, and disabled state", () => {
    const wrapper = mount(LButton, {
      props: {
        variant: "ghost",
        size: "sm",
        disabled: true,
      },
      slots: {
        default: "Search",
      },
    });

    expect(wrapper.text()).toContain("Search");
    expect(wrapper.classes()).toContain("lui-button");
    expect(wrapper.classes()).toContain("lui-button--ghost");
    expect(wrapper.classes()).toContain("lui-button--sm");
    expect(wrapper.attributes("disabled")).toBeDefined();
  });
});
