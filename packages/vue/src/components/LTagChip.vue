<template>
  <component
    :is="href ? 'a' : 'span'"
    :href="href"
    :class="['lui-tag-chip', `lui-tag-chip--${variant}`]"
    :style="tagStyle"
  >
    <slot>{{ prefix }}{{ label }}</slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { getTagStyle } from "../utils/tag";

defineOptions({
  name: "LTagChip",
});

const props = withDefaults(
  defineProps<{
    label: string;
    href?: string;
    variant?: "default" | "muted";
    prefix?: string;
  }>(),
  {
    href: undefined,
    variant: "default",
    prefix: "#",
  },
);

const tagStyle = computed(() => getTagStyle(props.label));
</script>

<style scoped>
.lui-tag-chip {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  text-decoration: none;
}

.lui-tag-chip--default {
  color: color-mix(in oklab, hsl(var(--lui-tag-h) 60% 24%) 86%, var(--main-color, #211915));
  font-size: 0.83rem;
  font-weight: 550;
  line-height: 1.15;
  letter-spacing: 0.01em;
  border: 1px solid color-mix(in oklab, hsl(var(--lui-tag-h) 66% 56%) 52%, var(--line-color, #dfd2c5));
  background:
    linear-gradient(
      135deg,
      color-mix(in oklab, hsl(var(--lui-tag-h) 88% 95%) 78%, var(--main-bg-color, #faf7f2)),
      color-mix(in oklab, hsl(var(--lui-tag-h) 82% 90%) 62%, var(--surface-elevated, #fffaf5))
    );
  padding: 0.21rem 0.63rem;
}

.lui-tag-chip--muted {
  position: relative;
  border-radius: 8px;
  line-height: 1.2;
  font-size: 0.8rem;
  font-weight: 520;
  letter-spacing: 0.01em;
  color: color-mix(in oklab, var(--main-color, #211915) 82%, var(--gray-color, #6f635a));
  border: 1px solid color-mix(in oklab, var(--line-color, #dfd2c5) 88%, transparent);
  background: color-mix(in oklab, hsl(var(--lui-tag-h) 58% 56%) 10%, var(--surface-elevated, #fffaf5));
  padding: 0.24rem 0.58rem 0.24rem 0.72rem;
}

.lui-tag-chip--muted::before {
  content: "";
  position: absolute;
  left: 0.36rem;
  top: 0.24rem;
  bottom: 0.24rem;
  width: 2px;
  border-radius: 999px;
  background: color-mix(in oklab, hsl(var(--lui-tag-h) 64% 50%) 42%, var(--line-color, #dfd2c5));
}
</style>
