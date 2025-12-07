/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VersionDto } from '../models/VersionDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CommonService {
    /**
     * @returns VersionDto OK
     * @throws ApiError
     */
    public static getLastVersionApi(): CancelablePromise<VersionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/GetLastVersion',
        });
    }
}
