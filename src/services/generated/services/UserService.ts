/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserCommand } from '../models/CreateUserCommand';
import type { SpelQuery } from '../models/SpelQuery';
import type { UpdatePasswordCommand } from '../models/UpdatePasswordCommand';
import type { UpdateUserCommand } from '../models/UpdateUserCommand';
import type { UpdateUserRolesCommand } from '../models/UpdateUserRolesCommand';
import type { UserDto } from '../models/UserDto';
import type { UserItemDtoPaginatedList } from '../models/UserItemDtoPaginatedList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * @param requestBody
     * @returns string OK
     * @throws ApiError
     */
    public static createApi(
        requestBody?: CreateUserCommand,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/Create',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApi(
        id: string = '0',
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/User/Delete/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param id
     * @returns UserDto OK
     * @throws ApiError
     */
    public static getItemApi(
        id: string = '0',
    ): CancelablePromise<UserDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/GetItem/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param sortColumn
     * @param sortType
     * @param filterQuery Represents a filter expression using a simplified SpEL-like syntax that can be applied to both IQueryable and IEnumerable sequences.<br>Supports comparison operators: >, >=, <, <=, ==, !=, ~ (like), !~ (not like).<br>Logical operators supported: and, or, not.<br>Parentheses can be used for grouping, and nested properties are supported via dot notation.<br>Constants can be numeric, string, boolean (true/false), or null.<br><br>Examples:<br>age > 45 — filters elements where age is greater than 45<br>name ~ 'ahmed' — filters elements where name matches the pattern 'ahmed'<br>(age > 45 or age < 20) and name ~ 'ahmed' — combined condition with grouping<br>person.age >= 18 and person.active == true — filtering on nested properties
     * @param pageNumber Start From 0
     * @param pageSize Range(1, 500)
     * @returns UserItemDtoPaginatedList OK
     * @throws ApiError
     */
    public static getListApi(
        sortColumn?: string,
        sortType?: 'Ascending' | 'Descending' | 'Unspecified',
        filterQuery?: SpelQuery,
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<UserItemDtoPaginatedList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/GetList',
            query: {
                'Sort.Column': sortColumn,
                'Sort.Type': sortType,
                'FilterQuery': filterQuery,
                'PageNumber': pageNumber,
                'PageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns UserDto OK
     * @throws ApiError
     */
    public static getMyDataApi(): CancelablePromise<UserDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/GetMyData',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static updateApi(
        requestBody?: UpdateUserCommand,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/User/Update',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static updateMyPasswordApi(
        requestBody?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/User/UpdateMyPassword',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static updatePasswordApi(
        requestBody?: UpdatePasswordCommand,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/User/UpdatePassword',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static updateRolesApi(
        requestBody?: UpdateUserRolesCommand,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/User/UpdateRoles',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
