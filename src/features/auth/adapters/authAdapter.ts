// Auth adapter: transform API data (mock)
export interface AuthApiResponse {
  user_id: number;
  email_address: string;
}

export interface AuthModel {
  id: number;
  email: string;
}

export function mapAuthApiResponseToModel(res: AuthApiResponse): AuthModel {
  return {
    id: res.user_id,
    email: res.email_address,
  };
}
