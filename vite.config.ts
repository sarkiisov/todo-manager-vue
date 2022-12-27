import { defineConfig, loadEnv } from 'vite'
import renderer from 'vite-plugin-electron-renderer';
import { fileURLToPath, URL } from 'url';
import vue from '@vitejs/plugin-vue';

const loadEnvVariables = (mode: string): void => {
  Object.assign(process.env, loadEnv(mode, process.cwd()));
}

// https://vitejs.dev/config/
export default defineConfig((init) => {
  loadEnvVariables(init.mode);
  return {
    base: '',
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
  }
})
