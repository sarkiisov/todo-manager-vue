<template>
  <AppSectionHeader>Appearence</AppSectionHeader>
  <div class="settings-item">
    <span class="settings-item__body">Color theme</span>
    <AppSelect
      :value="themeStore.theme"
      :options="themeColors"
      @option-change="changeTheme"
    />
  </div>
</template>

<script setup lang="ts">
import AppSelect from '@/components/AppSelect.vue';
import { themeColors } from '@/appConstants/theme';
import { useThemeStore } from '@/store/theme';
import AppSectionHeader from '@/components/AppSectionHeader.vue';

const themeStore = useThemeStore();

const changeTheme = (theme: string) => {
  themeStore.setTheme(theme);
};
</script>

<style scoped>
.settings-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.settings-item__body {
  user-select: none;
  color: var(--c-text);
}
</style>
