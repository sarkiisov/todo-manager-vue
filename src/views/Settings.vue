<template>
  <div class="settings-category">
    <h3 class="settings-category__body">Appearence</h3>
  </div>
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
import { themeColors } from '@/appContants/theme';
import { useThemeStore } from '@/store/theme';

const themeStore = useThemeStore();

const changeTheme = (theme: string) => {
  themeStore.setTheme(theme);
};
</script>

<style scoped>
.settings-category {
  padding-bottom: 24px;
}
.settings-category +
.settings-category {
  padding-top: 24px;
}
.settings-category__body {
  color: var(--c-text);
  font-size: 16px;
  font-weight: 500;
}
.settings-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.settings-item__body {
  color: var(--c-text);
}
</style>
