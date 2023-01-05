<template>
  <button class="sidebar__button" :class="{ 'sidebar__button_active': isActive }">
    <span class="sidebar__emoji-icon" v-if="props.emojiIcon">{{ props.emojiIcon }}</span>
    <component
      v-else
      class="sidebar__svg-icon"
      :is="props.svgIcon"
      :width="18"
      :height="18"
    />
    <span class="sidebar__body">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  svgIcon: { type: Object, required: true },
  emojiIcon: { type: String },
  isActive: { type: Boolean, default: false }
});
</script>

<style scoped>
.sidebar__button {
  width: 100%;
  height: 50px;
  padding: 0px 24px;
  font-size: 16px;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  background: none;
  color: var(--c-text);
}
.sidebar__button:hover {
  cursor: pointer;
  background: var(--c-bg-mute);
}
.sidebar__button_active {
  background-color: var(--c-bg-mute);
}
.sidebar__body {
  padding-left: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
