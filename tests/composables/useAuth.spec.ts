import { setActivePinia, createPinia } from 'pinia'
import { useAuth } from '@/composables/useAuth'
import { authStore } from '@/features/auth/store/authStore'

describe('useAuth composable', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('returns initial auth state', () => {
    const { isAuthenticated, user } = useAuth();
    expect(isAuthenticated).toBe(false);
    expect(user).toBeNull();
  });

  it('reflects login state', () => {
    const store = authStore();
    store.login('ali@email.com', 'pass');
    const { isAuthenticated, user } = useAuth();
    expect(isAuthenticated).toBe(true);
    expect(user).toEqual({ id: 1, email: 'ali@email.com' });
  });
});
