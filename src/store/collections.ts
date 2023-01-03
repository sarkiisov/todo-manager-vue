import { defineStore } from 'pinia';
import { Collection } from '@/types/Collection';

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
    setCurrentCollectionId(collectionId: Collection['id']) {
      this.currentCollectionId = collectionId;
    }
  },
  getters: {
    getCurrentCollection: (state) => {
      const index = state.collections.findIndex((object) => object.id === state.currentCollectionId);
      return state.collections[index];
    }
  }
});
