<template>
  <div class="collection-header-editor">
    <div class="collection-header-editor__icon" @click="toggleEmojiMenu">
      <span v-if="emojiIcon">{{ emojiIcon }}</span>
      <SmileIcon v-else :width="28" :height="28"/>
    </div>
    <input
      class="collection-header-editor__input"
      spellcheck="false"
      v-model="title"
      v-focus
    >
    <CollectionEmojiMenu v-if="showEmojiMenu" @update-emoji-icon="closeEmojiMenu"/>
  </div>
</template>

<script setup lang="ts">
import { ref, Directive, onBeforeUnmount } from 'vue';
import SmileIcon from '@/components/icons/SmileIcon.vue';
import CollectionEmojiMenu from '@/components/CollectionEmojiMenu.vue';
import { useCurrentCollection } from '@/composable/useCurrentCollection';

const {
  rawTitle, emojiIcon, setTitle
} = useCurrentCollection();

const title = ref(rawTitle);
const showEmojiMenu = ref(false);

const toggleEmojiMenu = () => {
  showEmojiMenu.value = !showEmojiMenu.value;
};

const closeEmojiMenu = () => {
  showEmojiMenu.value = false;
};

const updateTitle = () => {
  if (title.value === '') return;
  setTitle(title.value);
};

const vFocus: Directive = {
  mounted: (element) => element.focus()
};

onBeforeUnmount(() => {
  updateTitle();
});
</script>

<style scoped>
.collection-header-editor {
  flex-grow: 1;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  height: 48px;
  background: var(--c-bg-mute);
}
.collection-header-editor__icon {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  font-size: 24px;
  color: var(--c-border);
}
.collection-header-editor__icon:hover {
  cursor: pointer;
}
.collection-header-editor__input {
  flex-grow: 1;
  margin-left: 8px;
  margin-right: 16px;
  border: none;
  outline: none;
  background: none;
  font-size: 24px;
  font-weight: 500;
  color: var(--c-text);
}
.collection-header-editor__input::selection {
  background: var(--c-bg-dark);
}
</style>
