import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // local dev server
  server: {
    host: true,
    port: 4010,
  },
  // production server
  preview: {
    host: true,
    port: 4011,
  },
});
