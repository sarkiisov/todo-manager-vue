/* eslint-disable default-case */
import { Ref, ref, watch } from 'vue';
import { SyncStatus } from '@/types/SyncStatus';
import { StepBarItem } from '@/types/StepBarItem';

export const useSycnStepBar = (syncStatus: Ref<SyncStatus>) => {
  const syncStepBarItems = ref<StepBarItem[]>([
    {
      title: 'Connection established',
      isCompleted: false,
    },
    {
      title: 'Sync process confirmed',
      isCompleted: false,
    },
    {
      title: 'Todos were synced',
      isCompleted: false,
    },
  ]);

  const updateItemStatus = (index: number, value: boolean) => {
    syncStepBarItems.value[index].isCompleted = value;
  };

  watch(syncStatus, (newStatus) => {
    switch (newStatus) {
      case SyncStatus.INITIAL:
        updateItemStatus(0, false);
        updateItemStatus(1, false);
        updateItemStatus(2, false);
        break;
      case SyncStatus.CONNECTED:
        updateItemStatus(0, true);
        break;
      case SyncStatus.CONFIRMED:
        updateItemStatus(1, true);
        break;
      case SyncStatus.SYNCED:
        updateItemStatus(2, true);
    }
  });

  return {
    syncStepBarItems,
  };
};
