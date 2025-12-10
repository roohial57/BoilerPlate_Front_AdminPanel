import router from './vue-ui/router';
import { useRoute } from 'vue-router'


export default {
  push: (to) => router.push(to),
  forward: () => router.forward(),
  back: () => router.back(),
  currentRoute: () => router.currentRoute.value
};
