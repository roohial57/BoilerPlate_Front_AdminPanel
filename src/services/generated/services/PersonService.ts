/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BackgroundJobSchedulerSampleCommand } from '../models/BackgroundJobSchedulerSampleCommand';
import type { CreatePersonCommand } from '../models/CreatePersonCommand';
import type { ExternalPersonDto } from '../models/ExternalPersonDto';
import type { PersonDto } from '../models/PersonDto';
import type { PersonDtoPaginatedList } from '../models/PersonDtoPaginatedList';
import type { SpelQuery } from '../models/SpelQuery';
import type { UpdatePersonCommand } from '../models/UpdatePersonCommand';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PersonService {
    /**
     * نمونه یک فراخوانی job
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postApiPersonBackgroundJobSchedulerSample(
        requestBody?: BackgroundJobSchedulerSampleCommand,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Person/BackgroundJobSchedulerSample',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns string OK
     * @throws ApiError
     */
    public static postApiPersonCreate(
        requestBody?: CreatePersonCommand,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Person/Create',
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
     * @returns ExternalPersonDto OK
     * @throws ApiError
     */
    public static getApiPersonGetExternalItem(
        id: number,
    ): CancelablePromise<ExternalPersonDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Person/GetExternalItem/{id}',
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
     * @returns PersonDto OK
     * @throws ApiError
     */
    public static getApiPersonGetItem(
        id: string = '0',
    ): CancelablePromise<PersonDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Person/GetItem/{id}',
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
     * @param personId
     * @param sortColumn
     * @param sortType
     * @param filterQuery Represents a filter expression using a simplified SpEL-like syntax that can be applied to both IQueryable and IEnumerable sequences.<br>Supports comparison operators: >, >=, <, <=, ==, !=, ~ (like), !~ (not like).<br>Logical operators supported: and, or, not.<br>Parentheses can be used for grouping, and nested properties are supported via dot notation.<br>Constants can be numeric, string, boolean (true/false), or null.<br><br>Examples:<br>age > 45 — filters elements where age is greater than 45<br>name ~ 'ahmed' — filters elements where name matches the pattern 'ahmed'<br>(age > 45 or age < 20) and name ~ 'ahmed' — combined condition with grouping<br>person.age >= 18 and person.active == true — filtering on nested properties
     * @param pageNumber Start From 0
     * @param pageSize Range(1, 500)
     * @returns PersonDtoPaginatedList OK
     * @throws ApiError
     */
    public static getApiPersonGetList(
        personId?: number,
        sortColumn?: string,
        sortType?: 'Ascending' | 'Descending' | 'Unspecified',
        filterQuery?: SpelQuery,
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<PersonDtoPaginatedList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Person/GetList',
            query: {
                'PersonId': personId,
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
     * @param personId
     * @param pageNumber Start From 0
     * @param pageSize Range(1, 500)
     * @returns PersonDtoPaginatedList OK
     * @throws ApiError
     */
    public static getApiPersonGetListByDapper(
        personId?: number,
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<PersonDtoPaginatedList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Person/GetListByDapper',
            query: {
                'PersonId': personId,
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
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static putApiPersonUpdate(
        requestBody?: UpdatePersonCommand,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/Person/Update',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
