import { defineConfig } from 'vite'
import renderer from 'vite-plugin-electron-renderer';
import { fileURLToPath, URL } from 'url';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  mode: 'production',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL("./src", import.meta.url)),
    }
  },
  plugins: [
    vue(),
    renderer({
      nodeIntegration: true
    })
  ]
})
