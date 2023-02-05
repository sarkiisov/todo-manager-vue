<template>
  <div class="collection-progress-pie" :style="`--percentage: ${props.percentage}%`"></div>
</template>

<script setup lang="ts">
const props = defineProps({
  percentage: { type: Number, default: 0 }
});
</script>

<style scoped>
@property --percentage {
  initial-value: 0%;
  inherits: false;
  syntax: "<percentage>";
}
.collection-progress-pie {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: conic-gradient(var(--c-success) var(--percentage), transparent 0);
  border: 1px solid var(--c-border);
  transition: --percentage var(--ms200);
}
</style>
