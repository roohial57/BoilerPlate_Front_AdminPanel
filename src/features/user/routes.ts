import type { RouteRecordRaw } from 'vue-router';
import UserView from './views/UserView.vue';

const userRoutes: RouteRecordRaw[] = [
  {
    path: '/users',
    name: 'UserList',
    component: UserView,
  },
];

export default userRoutes;
