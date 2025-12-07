/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnumDto } from '../models/EnumDto';
import type { EnumListItemDto } from '../models/EnumListItemDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EnumService {
    /**
     * @param enumName
     * @returns EnumDto OK
     * @throws ApiError
     */
    public static getApi(
        enumName: string,
    ): CancelablePromise<Array<EnumDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Enum/Get/{enumName}',
            path: {
                'enumName': enumName,
            },
        });
    }
    /**
     * دریافت اطلاعات تمامی اینام ها
     * @returns EnumListItemDto OK
     * @throws ApiError
     */
    public static getListApi(): CancelablePromise<Array<EnumListItemDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Enum/GetList',
        });
    }
}
