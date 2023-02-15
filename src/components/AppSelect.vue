<template>
  <div class="select" :class="{ 'select_toggled': showDropdown }" ref="selectElement">
    <button class="select__option" @click="toggleDropdown">
      <span class="select__text">{{ props.value }}</span>
      <ChevronDownIcon class="select__chevron-icon" :width="16" :height="16"/>
    </button>
    <Transition name="scale">
      <div class="select__dropdown" v-if="showDropdown">
        <ul class="select__list">
          <li class="select__list-item" v-for="option in props.options" @click="setSelectedValue(option)">{{ option }}</li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue';
import { useOutsideClick } from '@/composable/useOutsideClick';
import ChevronDownIcon from '@/components/icons/ChevronDownIcon.vue';

const props = defineProps({
  value: { type: String, required: true },
  options: { type: Array as PropType<string[]>, required: true },
});

const emit = defineEmits(['optionChange']);

const showDropdown = ref(false);
const selectElement = ref();

useOutsideClick(selectElement, () => {
  showDropdown.value = false;
});

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const setSelectedValue = (value: string) => {
  emit('optionChange', value);
  showDropdown.value = false;
};
</script>

<style scoped>
.select {
  position: relative;
  width: 150px;
}
.select__option {
  position: relative;
  font-size: 16px;
  width: 100%;
  height: 40px;
  padding: 0px 24px 0px 12px;
  border: 1px solid var(--c-border);
  border-radius: 4px;
  text-align: left;
  outline: none;
  background: var(--c-bg);
  color: var(--c-text);
}
.select__option:hover {
  cursor: pointer;
}
.select_toggled
.select__option {
  background: var(--c-bg-mute);
}
.select__chevron-icon {
  right: 12px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  position: absolute;
}
.select_toggled
.select__chevron-icon {
  transform: scaleY(-1);
}
.select__list {
  list-style: none;
}
.select__list-item {
  line-height: 40px;
  height: 40px;
  padding: 0px 12px;
  color: var(--c-text);
}
.select__list-item:hover {
  cursor: pointer;
  background: var(--c-bg-mute);
}
.select__dropdown {
  position: absolute;
  top: calc(100% + 4px);
  overflow-y: overlay;
  width: 100%;
  max-height: calc(120px + 2px);
  border: 1px solid var(--c-border);
  border-radius: 4px;
  background: var(--c-bg);
  box-shadow: var(--shadow);
}
.select__dropdown::-webkit-scrollbar {
  width: 4px;
}
.select__dropdown::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: var(--c-bg-dark);
}
.select__option,
.select__list-item {
  text-transform: capitalize;
  user-select: none;
  overflow: hidden;
  white-space: nowrap;
  display: block;
  text-overflow: ellipsis;
}
</style>
