<template>
  <div class="copy-input" @click="copyToClipboard">
    <input
      class="copy-input__input"
      spellcheck="false"
      readonly
      :value="props.value"
    >
    <button class="copy-input__button">
      <CopyIcon :width="18" :height="18"/>
    </button>
  </div>

</template>

<script setup lang="ts">
import { ipcRenderer } from 'electron';
import CopyIcon from './icons/CopyIcon.vue';

const props = defineProps({
  value: { type: String, default: '' }
});

const copyToClipboard = () => {
  ipcRenderer.send('copy', props.value);
};
</script>

<style scoped>
.copy-input {
  display: flex;
  position: relative;
}
.copy-input__input {
  flex-grow: 1;
  height: 40px;
  font-size: 16px;
  outline: none;
  border: none;
  background: var(--c-bg);
  color: var(--c-text);
  border-bottom: 1px solid var(--c-border);
  padding-right: 48px;
}
.copy-input__input::selection {
  background: var(--c-bg-dark);
}
.copy-input__button {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: none;
  outline: none;
  background: none;
  color: var(--c-border);
}
.copy-input:hover
.copy-input__button {
  color: var(--c-text);
}
.copy-input:hover
.copy-input__input,
.copy-input__button {
  cursor: pointer;
}
</style>
