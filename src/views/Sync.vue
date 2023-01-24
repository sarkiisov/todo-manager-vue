<template>
  <AppSectionHeader>App sync code</AppSectionHeader>
  <AppCopyInput :value="peerId"/>
  <AppSectionHeader>Connection setup</AppSectionHeader>
  <div class="sync-item">
    <AppInput
      v-if="syncStatus === SyncStatus.INITIAL"
      class="sync-item__input"
      v-model="pairPeerId"
      :placeholder="'Pair peer code'"
    />
    <div class="sync-item__controls">
      <AppButton v-if="syncStatus === SyncStatus.INITIAL" @click="createConnection">Connect</AppButton>
      <AppButton v-if="syncStatus === SyncStatus.CONNECTED && peerMode === PeerMode.RECIEVE" @click="confirmSync">Confirm sync</AppButton>
      <AppButton v-if="syncStatus !== SyncStatus.INITIAL" @click="closeConnection">Close connection</AppButton>
    </div>
  </div>
  <AppSectionHeader>Sync status</AppSectionHeader>
  <SyncStepBar :items="syncStepBarItems"/>
</template>

<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
import AppInput from '@/components/AppInput.vue';
import AppCopyInput from '@/components/AppCopyInput.vue';
import SyncStepBar from '@/components/SyncStepBar.vue';
import AppSectionHeader from '@/components/AppSectionHeader.vue';
import { usePeerConnection } from '@/composable/usePeerConnection';
import { useSycnStepBar } from '@/composable/useSyncStepBar';
import { SyncStatus } from '@/types/SyncStatus';
import { PeerMode } from '@/types/PeerMode';

const {
  peerId, pairPeerId, peerMode, syncStatus, createConnection, confirmSync, closeConnection
} = usePeerConnection();
const { syncStepBarItems } = useSycnStepBar(syncStatus);
</script>

<style scoped>
.sync-item {
  display: flex;
  flex-direction: column;
}
.sync-item__input {
  margin-bottom: 12px;
}
.sync-item__controls {
  display: flex;
  gap: 12px;
}
</style>
