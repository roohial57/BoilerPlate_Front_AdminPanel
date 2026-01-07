# Vue 3 + TypeScript Admin Panel

## Feature-based Structure, Pinia, Router, Vitest

### Setup:
1. `npm install`
2. `npm run dev`

Add features in `src/features/`, shared logic in `src/services`, `src/composables`.


## API Code Generator Summary

This project includes a built-in TypeScript code generator that automatically creates TypeScript API clients, models, and types from a fixed Swagger/OpenAPI URL. The generator script is in (`scripts/generate-api.ts`).
When you run:

```
npm run gen
```

all corresponding TypeScript API code will be generated in `src/services/`. 

**Note:** If the Swagger/OpenAPI URL changes, you must update it directly inside `scripts/generate-api.ts` before running the generator command again. This ensures your API layer always stays in sync with your backend documentation.

## Test
the project includes e2e and unit tests.
The e2e tests develops by `playwright` and the descriptions placed in that readme in `tests/e2e`.
The unit tests develops by `vitest` and the descriptions placed in that readme  in `tests/unit`.