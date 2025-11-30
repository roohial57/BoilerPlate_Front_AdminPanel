import { UserService } from '@/services/UserService';

describe('UserService', () => {
  it('should resolve a list of user items', async () => {
    const service = new UserService();
    const result = await service.getUsers();
    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toHaveProperty('full_name');
  });
});
