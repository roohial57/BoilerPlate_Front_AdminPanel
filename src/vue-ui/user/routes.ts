import type { RouteRecordRaw } from 'vue-router';

const userRoutes: RouteRecordRaw[] = [
  {
    path: '/users',
    name: 'UserList',
    component: ()=> import('./views/UserView.vue'),
  },
];

export default userRoutes;
