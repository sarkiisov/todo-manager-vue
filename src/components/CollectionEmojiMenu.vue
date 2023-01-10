<template>
  <div class="collection-icon-menu">
    <div class="collection-icon-menu__item" @click="resetEmojiIcon">
      <XIcon :width="16" :height="16"/>
    </div>
    <div
      v-for="emojiIcon in emojiIcons"
      class="collection-icon-menu__item"
      @click="updateEmojiIcon(emojiIcon)"
    >
      {{ emojiIcon }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { emojiIcons } from '@/appConstants/emoji';
import XIcon from '@/components/icons/XIcon.vue';
import { useCurrentCollection } from '@/composable/useCurrentCollection';

const emit = defineEmits(['updateEmojiIcon']);

const { resetEmojiIcon, setEmojiIcon } = useCurrentCollection();

const updateEmojiIcon = (emojiIcon: string) => {
  setEmojiIcon(emojiIcon);
  emit('updateEmojiIcon');
};
</script>

<style scoped>
.collection-icon-menu {
  position: absolute;
  top: 100%;
  box-sizing: content-box;
  display: flex;
  flex-wrap: wrap;
  width: 250px;
  max-height: 250px;
  overflow-y: overlay;
  background: var(--c-bg);
  border-radius: 4px;
  border: 1px solid var(--c-border);
  box-shadow: var(--shadow);
}
.collection-icon-menu::-webkit-scrollbar {
  width: 4px;
}
.collection-icon-menu::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: var(--c-bg-dark);
}
.collection-icon-menu__item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 4px;
  color: var(--c-text);
}
.collection-icon-menu__item:hover {
  cursor: pointer;
  background: var(--c-bg-mute);
}
</style>
