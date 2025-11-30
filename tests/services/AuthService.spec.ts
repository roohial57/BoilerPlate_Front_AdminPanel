import { AuthService } from '@/services/AuthService';

describe('AuthService', () => {
  it('should resolve login with a token', async () => {
    const service = new AuthService();
    const result = await service.login('ali@email.com', 'pw');
    expect(result).toHaveProperty('token', 'dummy-token');
  });
});
