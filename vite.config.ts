import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import electron from 'vite-plugin-electron';
import vue from '@vitejs/plugin-vue';
import renderer from 'vite-plugin-electron-renderer';
import { rmSync } from 'node:fs';
import pkg from './package.json';

rmSync('dist-electron', { recursive: true, force: true });

// https://vitejs.dev/config/
export default defineConfig((init) => {
  return {
    base: '',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL("./src", import.meta.url)),
      }
    },
    plugins: [
      vue(),
      electron([
        {
          entry: 'electron/main/index.ts',
          vite: {
            build: {
              outDir: 'dist-electron/main',
              rollupOptions: {
                external: Object.keys("dependencies" in pkg ? pkg.dependencies : {}),
              },
            },
          },
        },
      ]),
      renderer({
        nodeIntegration: true
      })
    ]
  }
})
