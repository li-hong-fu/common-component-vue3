import { createApp } from 'vue';

// element（导入需在App.vue之前）
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import App from './App.vue';
import router from './router/index.ts';

// components
import components from './components/index.ts';
import './style.css';

createApp(App)
    .use(router)
    .use(components)
    .use(ElementPlus, { size: 'small', zIndex: 3000 })
    .mount('#app');
