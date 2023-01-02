<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="props.width"
       :height="props.height"
       :fill="props.fill"
       :stroke="props.stroke"
       :stroke-width="props.strokeWidth"
       viewBox="0 0 24 24"
       stroke-linecap="round"
       stroke-linejoin="round">
    <slot />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  width: { type: Number, default: 24 },
  height: { type: Number, default: 24 },
  fill: { type: String, default: 'none' },
  stroke: { type: String, default: 'currentColor' },
  strokeWidth: { type: Number, default: 2 }
});
</script>
