import type { RouteRecordRaw } from 'vue-router';

const authRoutes: RouteRecordRaw[] = [
  {
    path: '/auth',
    name: 'Auth',
    component:()=> import('./views/AuthView.vue'),
  },
];

export default authRoutes;
