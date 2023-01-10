import { computed, toRaw } from 'vue';
import { useCollectionsStore } from '@/store/collections';

export const useCurrentCollection = () => {
  const collectionsStore = useCollectionsStore();

  const title = computed(() => collectionsStore.getCurrentCollection.title);
  const emojiIcon = computed(() => collectionsStore.getCurrentCollection.emojiIcon);

  const rawTitle = toRaw(collectionsStore.getCurrentCollection.title);
  const rawEmojiIcon = toRaw(collectionsStore.getCurrentCollection.emojiIcon);

  const setTitle = (newTitle: string) => {
    collectionsStore.getCurrentCollection.title = newTitle;
  };

  const resetEmojiIcon = () => {
    collectionsStore.getCurrentCollection.emojiIcon = undefined;
  };

  const setEmojiIcon = (newEmojiIcon: string | undefined) => {
    collectionsStore.getCurrentCollection.emojiIcon = newEmojiIcon;
  };

  return {
    title,
    emojiIcon,
    rawTitle,
    rawEmojiIcon,
    setTitle,
    resetEmojiIcon,
    setEmojiIcon
  };
};
