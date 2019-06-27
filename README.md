# vuex-ide-test

Simple IDE (WebStorm, PhpStorm, IntelliJ) vue support testing with Yarn Workspaces.

Test support of Path Alias (@) and vuex hints.

## Steps

1. Init yarn `yarn init`
2. Add workspaces config to `package.json` and create `workspace1` dir.
3. Create project with [@vue/cli](https://cli.vuejs.org/) with babel+vuex features. `vue create .` in `workspace1`. 
4. Add ./src/lib/index.js for path alias testing
5. Add ./store directory with simple store with modules and one [TYPE CONSTANT](https://vuex.vuejs.org/guide/mutations.html#using-constants-for-mutation-types)
6. Configure IDE webpack config path to `./node_modules/@vue/cli-service/webpack.config.js` (Languages / Javascript / Webpack)
7. Run serve `npm run serve`

## File ./src/App.vue

* Line 12: Path alias
    * Must find module (no "module is not installed")
    * Works
* Line 32: Vuex map action from root with string array 
    * Must work Go to definition and params hints (ctx, {paramN})
    * Works
* Line 33: Vuex map action from module with string array
    * Must work Go to definition and params hints (ctx, {paramN})
    * Works
* Line 34: Vuex map action from deep module with object mapping and string name
    * Must work Go to definition and params hints (ctx, {paramN})
    * Works
* Line 35: Vuex map action from deep module with object mapping and TYPE CONSTANT name
    * Must work Go to definition and params hints (ctx, {paramN})
    * Doesnt works :(

```bash
npm install # Project setup
npm run serve # Compiles and hot-reloads for development
npm run build # Compiles and minifies for production
```
