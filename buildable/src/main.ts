import { createApp } from 'vue';
import App from './App.vue';

// import styles
import './assets/_global.scss';

// plugins/vuetify.js
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

const app = createApp(App);
const vuetify = createVuetify({
  theme: { defaultTheme: 'dark' },
});

app.use(vuetify);
app.mount('#app');
