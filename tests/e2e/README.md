### Run all Playwright tests
`npm run e2e`


### Run Playwright UI
`npm run e2e-ui`


### Vs code extentions
`Playwright Test for VSCode`



### Use testid
You can use the `data-testid` attribute to access elements in tests.  
Example:
`<span data-testid="userCount">{{ store.userCount }}</span>`

`testids` are removed in the production build.


### Global setup
Add global setup logic in `services/global-setup.ts`.


### Login
To test pages that require authentication, use the following code:
`test.use({ storageState: 'storage/admin.json' });`

The `storage/admin.json` is generated in `services/global-setup.ts`.


### Reuse code
Reusable code is placed in the `services` folder.
