<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <SidebarButton :svg-icon="HomeIcon" :isActive="isActiveRoute('overview')" @click="router.push('/collection')">Overview</SidebarButton>
      <SidebarButton :svg-icon="StarIcon" :isActive="isActiveRoute('important')" @click="router.push('/collection/important')">Important</SidebarButton>
      <SidebarButton :svg-icon="PlusIcon" @click="createCollection">New collection</SidebarButton>
    </div>
    <SidebarDivider />
    <div class="sidebar__body">
      <SidebarButton
        v-for="collection in collectionsStore.collections"
        :svg-icon="ListIcon"
        :emoji-icon="collection.emojiIcon"
        :isActive="route.params.id === collection.id"
        @click="router.push(`/collection/${collection.id}`)"
        @click.middle="deleteCollection(collection.id)"
      >
        {{ collection.title }}
      </SidebarButton>
    </div>
    <SidebarDivider />
    <div class="sidebar__footer">
      <SidebarButton :svg-icon="SettingsIcon" :isActive="isActiveRoute('settings')" @click="router.push('/settings')">Settings</SidebarButton>
      <SidebarButton :svg-icon="SyncIcon" :isActive="isActiveRoute('sync')" @click="router.push('/sync')">Sync</SidebarButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useCollectionsStore } from '@/store/collections';
import HomeIcon from '@/components/icons/HomeIcon.vue';
import ListIcon from '@/components/icons/ListIcon.vue';
import PlusIcon from '@/components/icons/PlusIcon.vue';
import SettingsIcon from '@/components/icons/SettingsIcon.vue';
import StarIcon from '@/components/icons/StarIcon.vue';
import SyncIcon from '@/components/icons/SyncIcon.vue';
import SidebarButton from '@/components/SidebarButton.vue';
import SidebarDivider from '@/components/SidebarDivider.vue';
import { Collection } from '@/types/Collection';

const router = useRouter();
const route = useRoute();
const collectionsStore = useCollectionsStore();

const createCollection = () => {
  collectionsStore.createCollection();
};

const deleteCollection = (collectionId: Collection['id']) => {
  if (route.params.id === collectionId) router.push('/overview');
  collectionsStore.deleteCollection(collectionId);
};

const isActiveRoute = (routeName: string) => route.name === routeName;
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-right: 1px solid var(--c-border);
}
.sidebar__body {
  flex-grow: 1;
  min-height: 50px;
  overflow-y: scroll;
}
.sidebar__body::-webkit-scrollbar {
  display: none;
}
</style>
