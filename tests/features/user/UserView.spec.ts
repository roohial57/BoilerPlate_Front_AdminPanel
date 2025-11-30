import { mount } from '@vue/test-utils';
import UserView from '@/features/user/views/UserView.vue';
it('renders and contains UserList', () => {
  const wrapper = mount(UserView, {
    global: { stubs: ['UserList'] },
  });
  expect(wrapper.text()).toContain('User List');
});
