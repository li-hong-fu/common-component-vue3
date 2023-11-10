import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Root',
        component: () => import('../components/layout/BasicLayout.vue'),
        children: [],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
