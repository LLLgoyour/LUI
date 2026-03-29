<template>
  <button
    :type="nativeType"
    :disabled="disabled"
    :class="classes"
  >
    <span v-if="$slots.leading" class="lui-button__leading">
      <slot name="leading" />
    </span>
    <span class="lui-button__label">
      <slot />
    </span>
    <span v-if="$slots.trailing" class="lui-button__trailing">
      <slot name="trailing" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineOptions({
  name: "LButton",
});

const props = withDefaults(
  defineProps<{
    variant?: "accent" | "neutral" | "ghost";
    size?: "sm" | "md" | "lg";
    block?: boolean;
    disabled?: boolean;
    nativeType?: "button" | "submit" | "reset";
  }>(),
  {
    variant: "accent",
    size: "md",
    block: false,
    disabled: false,
    nativeType: "button",
  },
);

const classes = computed(() => [
  "lui-button",
  `lui-button--${props.variant}`,
  `lui-button--${props.size}`,
  {
    "is-block": props.block,
  },
]);
</script>

<style scoped>
.lui-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  min-height: 2.8rem;
  padding: 0.72rem 1rem;
  border-radius: 999px;
  border: 1px solid transparent;
  cursor: pointer;
  color: var(--main-color, #211915);
  background: var(--surface-elevated, #fffaf5);
  box-shadow: inset 0 1px 0 color-mix(in oklab, #fff 55%, transparent);
  transition:
    background-color 160ms ease,
    border-color 160ms ease,
    color 160ms ease,
    transform 160ms ease,
    opacity 160ms ease;
}

.lui-button:hover:not(:disabled),
.lui-button:focus-visible:not(:disabled) {
  transform: translateY(-1px);
}

.lui-button--accent {
  border-color: color-mix(in oklab, var(--accent, #bd4b5f) 55%, var(--line-color, #dfd2c5));
  background: color-mix(in oklab, var(--accent, #bd4b5f) 15%, var(--main-bg-color, #faf7f2));
}

.lui-button--neutral {
  border-color: color-mix(in oklab, var(--line-color, #dfd2c5) 88%, transparent);
  background: color-mix(in oklab, var(--surface-elevated, #fffaf5) 92%, var(--main-bg-color, #faf7f2));
}

.lui-button--ghost {
  border-color: color-mix(in oklab, var(--line-color, #dfd2c5) 68%, transparent);
  background: transparent;
  box-shadow: none;
}

.lui-button--sm {
  min-height: 2.3rem;
  padding-inline: 0.8rem;
  font-size: 0.88rem;
}

.lui-button--lg {
  min-height: 3rem;
  padding-inline: 1.2rem;
  font-size: 1rem;
}

.is-block {
  width: 100%;
}

.lui-button:disabled {
  opacity: 0.58;
  cursor: not-allowed;
  transform: none;
}
</style>
