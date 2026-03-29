<template>
  <component
    :is="as"
    :class="[
      'lui-surface',
      `lui-surface--${tone}`,
      {
        'is-padded': padded,
      },
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
defineOptions({
  name: "LSurface",
});

withDefaults(
  defineProps<{
    as?: string;
    tone?: "default" | "muted";
    padded?: boolean;
  }>(),
  {
    as: "section",
    tone: "default",
    padded: true,
  },
);
</script>

<style scoped>
.lui-surface {
  border: 1px solid color-mix(in oklab, var(--line-color, #dfd2c5) 85%, transparent);
  border-radius: 12px;
  background:
    linear-gradient(
      160deg,
      color-mix(in oklab, var(--surface-elevated, #fffaf5) 88%, var(--main-bg-color, #faf7f2)),
      var(--main-bg-color, #faf7f2)
    );
}

.lui-surface--muted {
  background:
    linear-gradient(
      160deg,
      color-mix(in oklab, var(--surface-elevated, #fffaf5) 82%, var(--main-bg-color, #faf7f2)),
      color-mix(in oklab, var(--surface-elevated, #fffaf5) 94%, var(--main-bg-color, #faf7f2))
    );
}

.is-padded {
  padding: 1rem;
}
</style>
