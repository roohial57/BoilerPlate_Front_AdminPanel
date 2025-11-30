import type { RouteRecordRaw } from 'vue-router';
import AuthView from './views/AuthView.vue';

const authRoutes: RouteRecordRaw[] = [
  {
    path: '/auth',
    name: 'Auth',
    component: AuthView,
  },
];

export default authRoutes;
