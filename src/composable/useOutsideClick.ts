/* eslint-disable consistent-return */

import { onBeforeUnmount, onMounted, Ref } from 'vue';

export const useOutsideClick = (target: Ref, callback: () => void, doubleClick?: boolean) => {
  if (!target) return;

  const listner = (e: Event) => {
    if (e.target === target.value || e.composedPath().includes(target.value)) {
      return;
    }
    callback();
  };

  const eventName = doubleClick ? 'dblclick' : 'click';

  onMounted(() => {
    window.addEventListener(eventName, listner);
  });

  onBeforeUnmount(() => {
    window.removeEventListener(eventName, listner);
  });

  return {
    listner
  };
};
