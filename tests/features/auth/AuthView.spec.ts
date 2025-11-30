import { mount } from '@vue/test-utils';
import AuthView from '@/features/auth/views/AuthView.vue';

it('renders and contains LoginForm', () => {
  const wrapper = mount(AuthView, {
    global: { stubs: ['LoginForm'] },
  });
  expect(wrapper.text()).toContain('Auth Feature');
});
