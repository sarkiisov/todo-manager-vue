<template>
  <div class="sync-step-bar">
    <ul class="sync-step-bar__list">
      <li v-for="item in props.items" class="sync-step-bar__item" :class="{ 'sync-step-bar__item_completed': item.isCompleted }">
        <span class="sync-step-bar__body">{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { StepBarItem } from '@/types/StepBarItem';

const props = defineProps({
  items: { type: Array as PropType<StepBarItem[]>, required: true }
});
</script>

<style scoped>
.sync-step-bar__list {
  position: relative;
  padding-left: 24px;
  list-style: none;
}
.sync-step-bar__list::before {
  display: inline-block;
  content: '';
  position: absolute;
  top: 0;
  left: 6px;
  width: 10px;
  height: 100%;
  border-left: 2px solid var(--c-border);
}
.sync-step-bar__item {
  position: relative;
  counter-increment: list;
}
.sync-step-bar__item:not(:last-child) {
  padding-bottom: 32px;
}
.sync-step-bar__item::before {
  display: inline-block;
  content: '';
  position: absolute;
  left: -18px;
  height: 100%;
  width: 10px;
}
.sync-step-bar__item::after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 0;
  left: -24px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--c-border);
}
.sync-step-bar__item_completed::before {
  border-left: 2px solid var(--c-success);
}
.sync-step-bar__item_completed::after {
  color: var(--c-border);
  text-align: center;
  background: var(--c-success);
}
.sync-step-bar__body {
  user-select: none;
  line-height: 14px;
  display: block;
  color: var(--c-text);
}
</style>
