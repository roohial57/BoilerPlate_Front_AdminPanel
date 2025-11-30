import { useAuthStore } from '../features/auth/store/useAuthStore';

export function useAuth() {
  const auth = useAuthStore();
  return {
    isAuthenticated: auth.isAuthenticated,
    user: auth.user
  };
}
