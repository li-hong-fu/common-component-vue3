import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.ts';

// components
import components from './components/index.ts';
import './style.css';

createApp(App).use(router).use(components).mount('#app');
