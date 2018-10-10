# Changelog

## 2.0.0

BREAKING CHANGES...

The payload is now an object instead of a list of arguments:

```ts
const ATestAction = a('A_TEST_ACTION', ({ str }: { str: string }) => ({ str }))
```

There is a helper function, `p`, to reduce this boilerplate:

```ts
const ATestAction = a('A_TEST_ACTION', p<{ str: string }>())
```

`a` no longer returns a `create` method as it _is_ the function. This means the
TS type is written like so:

```ts
type ATestAction = ReturnType<typeof ATestAction> // not ATestAction.create
```

And dispatchers are now shorter but must use an object:

```ts
onTestAction: (str) => dispatch(ATestAction({ str })),
```

## 1.0.0

Initial release
