/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RoleListItem } from './RoleListItem';
export type RoleListItemPaginatedList = {
    items?: Array<RoleListItem> | null;
    pageNumber?: number;
    pageSize?: number;
    totalPages?: number;
    totalCount?: number;
    readonly hasPreviousPage?: boolean;
    readonly hasNextPage?: boolean;
};

