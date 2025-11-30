/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a filter expression using a simplified SpEL-like syntax that can be applied to both IQueryable and IEnumerable sequences.<br>Supports comparison operators: >, >=, <, <=, ==, !=, ~ (like), !~ (not like).<br>Logical operators supported: and, or, not.<br>Parentheses can be used for grouping, and nested properties are supported via dot notation.<br>Constants can be numeric, string, boolean (true/false), or null.<br><br>Examples:<br>age > 45 — filters elements where age is greater than 45<br>name ~ 'ahmed' — filters elements where name matches the pattern 'ahmed'<br>(age > 45 or age < 20) and name ~ 'ahmed' — combined condition with grouping<br>person.age >= 18 and person.active == true — filtering on nested properties
 */
export type SpelQuery = string;
