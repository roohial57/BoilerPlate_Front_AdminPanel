/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppPermissionTreeItem } from '../models/AppPermissionTreeItem';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PermissionService {
    /**
     * @returns AppPermissionTreeItem OK
     * @throws ApiError
     */
    public static getListApi(): CancelablePromise<Array<AppPermissionTreeItem>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Permission/GetList',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
