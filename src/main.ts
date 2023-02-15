import { createApp } from 'vue';
import './assets/css/theme.css';
import './assets/css/fonts.css';
import './assets/css/reset.css';
import './assets/css/animations.css';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from './App.vue';
import router from './router';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app');
