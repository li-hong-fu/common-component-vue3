const page: any[] = [
    {
        path: '/',
        name: 'Root',
        component: () => import('@/components/layout/BasicLayout.vue'),
        // redirect: { name: "Home" },
        children: [],
    },
];

export default page;
