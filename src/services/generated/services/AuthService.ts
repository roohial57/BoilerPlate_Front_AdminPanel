/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginCommand } from '../models/LoginCommand';
import type { LoginResultDto } from '../models/LoginResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * رفرش توکن در کوکی قرار میگیرد و در خروجی سرویس مشاهده نیست
     * @param requestBody
     * @returns LoginResultDto OK
     * @throws ApiError
     */
    public static loginApi(
        requestBody?: LoginCommand,
    ): CancelablePromise<LoginResultDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Auth/Login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * رفرش توکن در کوکی قرار داد و نیاز به ارسال مستقیم آن نیست
     * @returns LoginResultDto OK
     * @throws ApiError
     */
    public static refreshTokenApi(): CancelablePromise<LoginResultDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Auth/RefreshToken',
        });
    }
}
