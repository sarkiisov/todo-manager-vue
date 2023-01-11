<template>
  <div class="section-header">
    <h3 class="section-header__body">
      <slot />
    </h3>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
.section-header {
  padding-bottom: 24px;
}
.section-header ~
.section-header {
  padding-top: 20px;
}
.section-header__body {
  user-select: none;
  font-size: 16px;
  font-weight: 500;
  color: var(--c-text);
}
</style>
