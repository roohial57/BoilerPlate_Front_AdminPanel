import { createRouter, createWebHistory, RouterOptions } from 'vue-router';
import authRoutes from './auth/routes';
import userRoutes from './user/routes';

const routes = [
  {
    path: '/',
    redirect: '/users',
  },
  ...authRoutes,
  ...userRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
} as RouterOptions);

export default router;
