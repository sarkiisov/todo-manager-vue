import { defineStore } from 'pinia';

export type ThemeState = {
  theme: string;
};

export const useThemeStore = defineStore('theme', {
  state: (): ThemeState => ({
    theme: 'light'
  }),
  actions: {
    setTheme(theme: string) {
      this.theme = theme;
    }
  },
  persist: true,
});
