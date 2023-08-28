import { createApp } from 'vue';
import App from './App.vue';

// import styles
import './style.css';
import './assets/_global.scss';

// plugins/vuetify.js
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

const app = createApp(App);
const vuetify = createVuetify();

app.use(vuetify);
app.mount('#app');
