import { createRouter, createWebHistory, RouterOptions } from 'vue-router';
import authRoutes from '../features/auth/routes';
import userRoutes from '../features/user/routes';

const routes = [
  {
    path: '/',
    redirect: '/auth',
  },
  ...authRoutes,
  ...userRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
} as RouterOptions);

export default router;
