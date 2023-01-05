import { defineStore } from 'pinia';
import { Collection } from '@/types/Collection';
import { useTodosStore } from '@/store/todos';

export type CollectionsState = {
  collections: Collection[];
  currentCollectionId: Collection['id'];
};

export const useCollectionsStore = defineStore('collections', {
  state: (): CollectionsState => ({
    collections: [],
    currentCollectionId: '',
  }),
  actions: {
    createCollection() {
      const collection: Collection = {
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        title: 'New collection',
      };
      this.collections.unshift(collection);
    },
    deleteCollection(collectionId: Collection['id']) {
      const todos = useTodosStore();
      const collectionIndex = this.collections.findIndex((object) => object.id === collectionId);
      if (collectionIndex !== -1) {
        todos.deleteTodos(collectionId);
        this.collections.splice(collectionIndex, 1);
      }
    },
    setCurrentCollectionId(collectionId: Collection['id']) {
      this.currentCollectionId = collectionId;
    }
  },
  getters: {
    getCurrentCollection: (state) => {
      const index = state.collections.findIndex((object) => object.id === state.currentCollectionId);
      return state.collections[index];
    }
  },
  persist: {
    paths: ['collections']
  }
});
