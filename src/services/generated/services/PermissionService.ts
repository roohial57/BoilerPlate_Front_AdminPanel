/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppPermissionTreeNode } from '../models/AppPermissionTreeNode';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PermissionService {
    /**
     * @returns AppPermissionTreeNode OK
     * @throws ApiError
     */
    public static getListApi(): CancelablePromise<AppPermissionTreeNode> {
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
