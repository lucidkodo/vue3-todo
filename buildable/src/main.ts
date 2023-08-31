import { createApp } from 'vue';
import App from './App.vue';

// import styles
import './assets/_global.scss';

// plugins/vuetify.js
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

const app = createApp(App);
const vuetify = createVuetify({
  theme: { defaultTheme: 'dark' },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});

app.use(vuetify);
app.mount('#app');
