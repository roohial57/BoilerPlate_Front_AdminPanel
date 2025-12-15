import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/notify',
    name: 'NotifyDemo',
    component: ()=> import('./views/NotifyDemo.vue'),
  },
];

export default routes;
