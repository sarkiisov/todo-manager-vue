import { createApp } from 'vue';
import './assets/css/theme.css';
import './assets/css/fonts.css';
import './assets/css/reset.css';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app');
