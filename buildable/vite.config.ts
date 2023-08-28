import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify(), // this is a first-party plugin
  ],
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
