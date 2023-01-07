/* eslint-disable consistent-return */

import { onBeforeUnmount, onMounted, Ref } from 'vue';

export const useOutsideClick = (target: Ref, callback: () => void) => {
  if (!target) return;

  const listner = (e: Event) => {
    if (e.target === target.value || e.composedPath().includes(target.value)) {
      return;
    }
    callback();
  };

  onMounted(() => {
    window.addEventListener('click', listner);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('click', listner);
  });

  return {
    listner
  };
};
