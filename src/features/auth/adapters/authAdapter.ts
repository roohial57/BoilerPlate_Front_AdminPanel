// Auth adapter: transform API data and handle API calls
import { AuthService } from '../../../services/AuthService';
import { UserService } from '../../../services/UserService';
import type { LoginCommand } from '../../../services/generated/models/LoginCommand';
import type { LoginResultDto } from '../../../services/generated/models/LoginResultDto';
import type { UserDto } from '../../../services/generated/models/UserDto';

export interface AuthModel {
  id: string;
  username: string;
  fullName?: string;
  roles?: string[];
}

export interface LoginCredentials {
  username: string;
  password: string;
}

// تبدیل LoginResultDto به AuthModel (برای اطلاعات پایه پس از لاگین)
export function mapLoginResultToAuthModel(res: LoginResultDto): AuthModel {
  return {
    id: res.username || '', // در صورت نیاز می‌توان از token استخراج کرد
    username: res.username || '',
    fullName: undefined, // اطلاعات کامل از UserService گرفته می‌شود
    roles: undefined,
  };
}

// تبدیل UserDto به AuthModel (برای اطلاعات کامل کاربر)
export function mapUserDtoToAuthModel(userDto: UserDto): AuthModel {
  return {
    id: userDto.id || '',
    username: userDto.username || '',
    fullName: userDto.fullName || undefined,
    roles: userDto.roles || undefined,
  };
}

// عملیات لاگین با استفاده از AuthService
export async function login(credentials: LoginCredentials): Promise<LoginResultDto> {
  const loginCommand: LoginCommand = {
    username: credentials.username,
    password: credentials.password,
  };

  // استفاده از AuthService (که از generated ارث‌بری کرده)
  return await AuthService.putApiAuthLogin(loginCommand);
}

// دریافت اطلاعات کامل کاربر با استفاده از UserService
export async function getCurrentUser(): Promise<AuthModel> {
  // استفاده از UserService (که از generated ارث‌بری کرده)
  const userDto = await UserService.getApiUserGetMyData();
  return mapUserDtoToAuthModel(userDto);
}

// عملیات کامل لاگین که شامل دریافت اطلاعات کاربر هم می‌شود
export async function loginAndGetUser(credentials: LoginCredentials): Promise<AuthModel> {
  // اول لاگین می‌کنیم
  await login(credentials);

  // سپس اطلاعات کامل کاربر رو می‌گیریم
  return await getCurrentUser();
}
