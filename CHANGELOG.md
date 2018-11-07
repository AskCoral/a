# Changelog

## 3.0.0

BREAKING CHANGES...

`p` is no longer required (or included). Write your actions using a typed object
instead.

```
import a from 'a'

const ASimpleAction = a('A_SIMPLE_ACTION')
const APayloadAction = a('A_PAYLOAD_ACTION', <{ exampleName: string }>{})

type ASimpleAction = ReturnType<typeof ASimpleAction>
type APayloadAction = ReturnType<typeof APayloadAction>

export { ASimpleAction, APayloadAction }
```

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
