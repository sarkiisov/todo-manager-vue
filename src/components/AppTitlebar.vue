<template>
  <div class="titlebar">
    <div class="titlebar__controls">
      <button class="titlebar__button" @click="minimizeWindow">
        <MinusIcons width="16" height="16" />
      </button>
      <button class="titlebar__button" @click="closeWindow">
        <XIcon width="16" height="16" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ipcRenderer } from 'electron';
import XIcon from '@/components/icons/XIcon.vue';
import MinusIcons from '@/components/icons/MinusIcon.vue';

const minimizeWindow = () => {
  ipcRenderer.send('minimizeWindow');
};

const closeWindow = () => {
  ipcRenderer.send('closeWindow');
};
</script>

<style scoped>
.titlebar {
  height: 30px;
  display: flex;
  background: var(--c-bg-dark);
  user-select: none;
  -webkit-user-select: none;
  -webkit-app-region: drag;
}
.titlebar__controls {
  margin-left: auto;
}
.titlebar__button {
  width: 30px;
  height: 100%;
  border: none;
  outline: none;
  color: var(--c-text);
  background: var(--c-bg-dark);
  -webkit-app-region: no-drag;
}
.titlebar__button:hover {
  background: var(--c-bg-mute);
}
</style>
