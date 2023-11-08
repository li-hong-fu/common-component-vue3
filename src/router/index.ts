import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes: [],
});

document.title = '系统标题';
