<template>
  <div class="collection-header" >
    <div class="collection-header__inner" ref="headerElement">
      <h2 v-if="!isEditMode" class="collection-header__text" @click="toggleEditor">{{ emojiIcon }} {{ title }}</h2>
      <div v-else class="collection-editor">
        <div class="collection-editor__icon" @click="toggleEmojiMenu">
          <span v-if="emojiIcon">{{ emojiIcon }}</span>
          <SmileIcon v-else :width="28" :height="28"/>
        </div>
        <input
          class="collection-editor__input"
          v-model="tempTitle"
          ref="inputElement"
          spellcheck="false"
        >
        <CollectionEmojiMenu v-if="isEmojiMenuToggled"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue';
import { useCollectionsStore } from '@/store/collections';
import { useOutsideClick } from '@/composable/useOutsideClick';
import SmileIcon from '@/components/icons/SmileIcon.vue';
import CollectionEmojiMenu from '@/components/CollectionEmojiMenu.vue';

const collectionsStore = useCollectionsStore();

const emojiIcon = computed(() => collectionsStore.getCurrentCollection.emojiIcon);
const title = computed(() => collectionsStore.getCurrentCollection.title);

const isEditMode = ref(false);
const isEmojiMenuToggled = ref(false);
const tempTitle = ref('');
const headerElement = ref();
const inputElement = ref();

const openEditor = async () => {
  isEditMode.value = true;
  await nextTick();
  tempTitle.value = title.value;
  inputElement.value.focus();
};

const closeEditor = () => {
  isEditMode.value = false;
  isEmojiMenuToggled.value = false;
};

const toggleEmojiMenu = () => {
  isEmojiMenuToggled.value = !isEmojiMenuToggled.value;
};

const toggleEditor = async () => {
  if (isEditMode.value) {
    closeEditor();
  } else {
    openEditor();
  }
};

const applyTitle = () => {
  if (tempTitle.value === '') return;
  collectionsStore.getCurrentCollection.title = tempTitle.value;
};

useOutsideClick(headerElement, () => {
  closeEditor();
  applyTitle();
});
</script>

<style scoped>
.collection-header {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 100px;
  user-select: none;
}
.collection-header__inner {
  flex-grow: 1;
  min-width: 0;
}
.collection-header__text {
  padding: 8px 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  font-weight: 500;
  color: var(--c-text);
}
.collection-header__text:hover {
  cursor: pointer;
  background: var(--c-bg-mute);
}
.collection-editor {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0px;
  background: var(--c-bg-mute);
}
.collection-editor__icon {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: var(--c-border);
}
.collection-editor__icon:hover {
  cursor: pointer;
}
.collection-editor__input {
  flex-grow: 1;
  margin-left: 8px;
  border: none;
  outline: none;
  background: none;
  font-size: 24px;
  font-weight: 500;
  color: var(--c-text);
}
.collection-editor__input::selection {
  background: var(--c-bg-dark);
}
</style>
