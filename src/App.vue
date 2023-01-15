<template>
  <div class="vue-app" :data-theme="themeStore.theme">
    <AppTitlebar />
    <div class="layout">
      <AppSidebar />
      <div class="content-wrapper">
        <router-view name="header" />
        <router-view name="content"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppTitlebar from '@/components/AppTitlebar.vue';
import AppSidebar from '@/components/AppSidebar.vue';
import { useThemeStore } from '@/store/theme';

const themeStore = useThemeStore();
</script>

<style>
.vue-app {
  width: 800px;
  height: 580px;
  background: var(--c-bg);
}
.layout {
  display: grid;
  grid-template-columns: 270px 530px;
  grid-template-rows: 550px;
}
.content-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0px 50px;
}
</style>
