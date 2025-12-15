import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/users',
    name: 'UserList',
    component: ()=> import('./views/UserView.vue'),
  },
];

export default routes;
