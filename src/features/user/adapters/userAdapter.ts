// User adapter: transform API data (mock)
export interface UserApiResponse {
  id: number;
  full_name: string;
  email: string;
}

export interface UserModel {
  id: number;
  name: string;
  email: string;
}

export function mapUserApiResponseToModel(res: UserApiResponse): UserModel {
  return {
    id: res.id,
    name: res.full_name,
    email: res.email,
  };
}
