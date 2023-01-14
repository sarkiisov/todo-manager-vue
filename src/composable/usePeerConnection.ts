import {
  onMounted, onBeforeUnmount, ref, toRaw
} from 'vue';
import punycode from 'punycode/';
import { DataConnection } from 'peerjs';
import { useTodosStore } from '@/store/todos';
import { useCollectionsStore } from '@/store/collections';

import { SyncMessage } from '@/types/SyncMessage';
import { SyncStatus } from '@/types/SyncStatus';
import { PeerMode } from '@/types/PeerMode';
import PeerManager from '@/utils/PeerManager';

export const usePeerConnection = () => {
  const peerManager = new PeerManager();

  const peerId = ref<string>();
  const pairPeerId = ref<string>();
  const peerMode = ref<PeerMode>(PeerMode.INITIAL);
  const syncStatus = ref<SyncStatus>(SyncStatus.INITIAL);

  const collectionsStore = useCollectionsStore();
  const todosStore = useTodosStore();

  onMounted(async () => {
    peerId.value = await peerManager.getPeerId();
  });

  onBeforeUnmount(() => {
    peerManager.destroyPeer();
  });

  const addSendModeListeners = (connection: DataConnection) => {
    connection.on('open', () => {
      syncStatus.value = SyncStatus.CONNECTED;
    });
    connection.on('close', () => {
      peerMode.value = PeerMode.INITIAL;
      syncStatus.value = SyncStatus.INITIAL;
    });
    connection.on('data', (data) => {
      const message = data as SyncMessage;
      if (message.type === 'CONFIRM_SYNC') {
        const confirmMessage: SyncMessage = { type: 'CONFIRM_SYNC' };
        connection.send(confirmMessage);
        const transferMessage: SyncMessage = {
          type: 'TRANSFER_DATA',
          payload: {
            collections: punycode.encode(JSON.stringify(toRaw(collectionsStore.$state))),
            todos: punycode.encode(JSON.stringify(toRaw(todosStore.$state)))
          }
        };
        connection.send(transferMessage);
        syncStatus.value = SyncStatus.CONFIRMED;
        return;
      }
      if (message.type === 'SYNCED') {
        syncStatus.value = SyncStatus.SYNCED;
      }
    });
  };

  const addRecieveModeListeners = (connection: DataConnection) => {
    connection.on('open', () => {
      syncStatus.value = SyncStatus.CONNECTED;
    });
    connection.on('close', () => {
      peerMode.value = PeerMode.INITIAL;
      syncStatus.value = SyncStatus.INITIAL;
    });
    connection.on('data', (data) => {
      const message = data as SyncMessage;
      if (message.type === 'CONFIRM_SYNC') {
        syncStatus.value = SyncStatus.CONFIRMED;
        return;
      }
      if (message.type === 'TRANSFER_DATA') {
        if (!message.payload) return;
        const collections = JSON.parse(punycode.decode(message.payload.collections));
        const todos = JSON.parse(punycode.decode(message.payload.todos));
        collectionsStore.$patch(collections);
        todosStore.$patch(todos);
        const syncedMessage: SyncMessage = { type: 'SYNCED' };
        connection.send(syncedMessage);
        syncStatus.value = SyncStatus.SYNCED;
      }
    });
  };

  peerManager.peerInstance.on('connection', (connection) => {
    peerMode.value = PeerMode.SEND;
    addSendModeListeners(connection);
  });

  const createConnection = async () => {
    peerMode.value = PeerMode.RECIEVE;
    if (!pairPeerId.value) return;
    const connection = await peerManager.createConnection(pairPeerId.value);
    addRecieveModeListeners(connection);
  };

  const closeConnection = () => {
    pairPeerId.value = '';
    peerManager.closeConnection();
  };

  const confirmSync = () => {
    const connection = peerManager.connectionInstance;
    if (!connection) return;
    const confirmMessage: SyncMessage = { type: 'CONFIRM_SYNC' };
    connection.send(confirmMessage);
  };

  return {
    peerId,
    pairPeerId,
    peerMode,
    syncStatus,
    createConnection,
    closeConnection,
    confirmSync
  };
};
