/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserItemDto } from './UserItemDto';
export type UserItemDtoPaginatedList = {
    items?: Array<UserItemDto> | null;
    pageNumber?: number;
    pageSize?: number;
    totalPages?: number;
    totalCount?: number;
    readonly hasPreviousPage?: boolean;
    readonly hasNextPage?: boolean;
};

