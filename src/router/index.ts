import { createRouter, createWebHashHistory } from 'vue-router';
import { useCollectionsStore } from '@/store/collections';
import AppHeader from '@/components/AppHeader.vue';
import CollectionHeader from '@/components/CollectionHeader.vue';
import Overview from '@/views/Overview.vue';
import Important from '@/views/Important.vue';
import Collection from '@/views/Collection.vue';
import Settings from '@/views/Settings.vue';
import Sync from '@/views/Sync.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/collection',
    },
    {
      path: '/collection',
      children: [
        {
          path: '',
          name: 'overview',
          components: {
            header: AppHeader,
            content: Overview,
          },
        },
        {
          path: 'important',
          name: 'important',
          components: {
            header: AppHeader,
            content: Important
          }
        },
        {
          path: ':id',
          name: 'collection',
          components: {
            header: CollectionHeader,
            content: Collection
          }
        }
      ]
    },
    {
      path: '/settings',
      name: 'settings',
      components: {
        header: AppHeader,
        content: Settings,
      }
    },
    {
      path: '/sync',
      name: 'sync',
      components: {
        header: AppHeader,
        content: Sync
      }
    }
  ]
});

router.beforeEach((to) => {
  if (to.name === 'collection') {
    const collections = useCollectionsStore();
    collections.setCurrentCollectionId(to.params.id as string);
  }
  return true;
});

export default router;
