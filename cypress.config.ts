import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    
    baseUrl: 'http://localhost:5173',
    specPattern: 'tests/e2e/**/*.cy.{js,ts}',
    supportFile: 'cypress/support/e2e.ts',
    experimentalRunAllSpecs: true,
  },
});
