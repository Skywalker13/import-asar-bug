# import-asar-bug

The `import()` function which can be used to load es6 module into commonjs module is broken when an app is package as app.asar. It doesn't work even if it's deployed into the `app.asar.unpacked` directory. It works only when asar is disabled.

```
npm i
```

## Working

```
node_modules/.bin/electron .
```

```
npm run good
dist/mac-arm64/import-asar-bug.app/Contents/MacOS/import-asar-bug 
```

## Broken

When electron is used with app.asar, it's broken

```
npm run bad
dist/mac-arm64/import-asar-bug.app/Contents/MacOS/import-asar-bug 
(node:31052) UnhandledPromiseRejectionWarning: Error: ENOTDIR: not a directory, stat '/Users/epsitec/devel/import-asar-bug/dist/mac-arm64/import-asar-bug.app/Contents/Resources/app.asar/lib/my-commonjs/node_modules/my-module'
    at statSync (node:fs:1538:3)
    at tryStatSync (node:internal/modules/esm/resolve:184:13)
    at packageResolve (node:internal/modules/esm/resolve:899:18)
    at moduleResolve (node:internal/modules/esm/resolve:978:18)
    at defaultResolve (node:internal/modules/esm/resolve:1080:11)
    at ESMLoader.resolve (node:internal/modules/esm/loader:530:30)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:251:18)
    at ESMLoader.import (node:internal/modules/esm/loader:332:22)
    at importModuleDynamically (node:internal/modules/cjs/loader:1049:29)
    at importModuleDynamicallyWrapper (node:internal/vm/module:437:21)

```
