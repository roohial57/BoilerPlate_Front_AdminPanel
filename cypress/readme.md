For explorer test you need to install `Cypress Test Explorer` vs extention.
For snipet, install `Cypress Helper`  vs extention.


# To identify the `Cypress`, you must install the following:
npm install --save-dev cypress
npm install --save-dev @types/jest
Set in `tsconfig.json` 
```{
  "compilerOptions": {
    "types": ["cypress", "jest"]
  }
}```