# graphql-version-error-example

How to reproduce error:

```
cd packages/directives
yarn install
yarn run compile
yarn link

cd ..
cd graphql-server
yarn install
yarn link directives
yarn start
```


Error message:

```
/Users/tim/workspace/graphql-version-error-example/packages/graphql-server/node_modules/graphql/jsutils/instanceOf.js:15
      throw new Error('Cannot use ' + className + ' "' + value + '" from another module or realm.\n\nEnsure that there is only one instance of "graphql" in the node_modules\ndirectory. If different versions of "graphql" are the dependencies of other\nrelied on modules, use "resolutions" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate "graphql" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results.');
            ^
Error: Cannot use GraphQLScalarType "ID" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.
    at instanceOf (/Users/tim/workspace/graphql-version-error-example/packages/graphql-server/node_modules/graphql/jsutils/instanceOf.js:15:13)
    at isScalarType (/Users/tim/workspace/graphql-version-error-example/packages/graphql-server/node_modules/graphql/type/definition.js:98:35)
    at Object.isNamedType (/Users/tim/workspace/graphql-version-error-example/packages/graphql-server/node_modules/graphql/type/definition.js:343:10)
    at healType (/Users/tim/workspace/graphql-version-error-example/packages/graphql-server/node_modules/graphql-tools/src/schemaVisitor.ts:406:16)
    at /Users/tim/workspace/graphql-version-error-example/packages/graphql-server/node_modules/graphql-tools/src/schemaVisitor.ts:391:20
    at /Users/tim/workspace/graphql-version-error-example/packages/graphql-server/node_modules/graphql-tools/src/schemaVisitor.ts:698:5
    at Array.forEach (<anonymous>)
    at each (/Users/tim/workspace/graphql-version-error-example/packages/graphql-server/node_modules/graphql-tools/src/schemaVisitor.ts:697:30)
    at healFields (/Users/tim/workspace/graphql-version-error-example/packages/graphql-server/node_modules/graphql-tools/src/schemaVisitor.ts:390:5)
    at heal (/Users/tim/workspace/graphql-version-error-example/packages/graphql-server/node_modules/graphql-tools/src/schemaVisitor.ts:364:7)
```
