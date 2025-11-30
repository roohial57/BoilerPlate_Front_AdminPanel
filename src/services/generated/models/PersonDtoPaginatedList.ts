/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PersonDto } from './PersonDto';
export type PersonDtoPaginatedList = {
    items?: Array<PersonDto> | null;
    pageNumber?: number;
    pageSize?: number;
    totalPages?: number;
    totalCount?: number;
    readonly hasPreviousPage?: boolean;
    readonly hasNextPage?: boolean;
};

