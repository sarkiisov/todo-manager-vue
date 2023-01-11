<template>
  <input
    class="input"
    spellcheck="false"
    :placeholder="props.placeholder"
    :value="props.modelValue"
    @input="updateModelValue"
  >
</template>

<script setup lang="ts">

const props = defineProps({
  modelValue: { type: String },
  placeholder: { type: String }
});

const emit = defineEmits(['update:modelValue']);

const updateModelValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};

</script>

<style scoped>
.input {
  height: 40px;
  font-size: 16px;
  outline: none;
  border: none;
  background: var(--c-bg);
  color: var(--c-text);
  border-bottom: 1px solid var(--c-border);
}
.input::placeholder {
  color: var(--c-border);
}
.input::selection {
  background: var(--c-bg-dark);
}
</style>
