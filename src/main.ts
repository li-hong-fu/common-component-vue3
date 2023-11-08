import { createApp } from 'vue';
import App from './App.vue';

// components
import components from './components/index.ts';
import './style.css';

createApp(App).use(components).mount('#app');
