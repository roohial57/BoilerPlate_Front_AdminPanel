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
Add global setup logic in `utils/global-setup.ts`.


### Login
To test pages that require authentication, use the following code:
`test.use({ storageState: 'storage/admin.json' });`

The `storage/admin.json` is generated in `utils/global-setup.ts`.


### Reuse code
Reusable code is placed in the `utils` folder.


### Use fixture
To do work that is required to execute, use a fixture.
For example, creating an item and then viewing its details.


### Multi step tests

``` test('full checkout flow', async ({ page }) => {
  await test.step('login', async () => {});
  await test.step('add to cart', async () => {});
  await test.step('checkout', async () => {});
}); ```
