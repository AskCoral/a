# a: Typesafe Redux action creation utility

A zero-dependency, boilerplate-reducing utility for easily creating typesafe
Redux actions in TypeScript.

## Install

```sh
yarn add @artossystems/a
# or
npm install @artossystems/a
```

## Usage

```ts
/**
 * Actions
 */

import a from '@artossystems/a'

// Simple action without payload
const ASimpleAction = a('SIMPLE/ACTION')
type ASimpleAction = ReturnType<typeof ASimpleAction>

/**
 * Produces:
 * {
 *   type: "SIMPLE/ACTION",
 * }
 */

// Action with payload
const APayloadAction = a('PAYLOAD/ACTION', {} as { str: string })
type APayloadAction = ReturnType<typeof APayloadAction>

/**
 * Produces:
 * {
 *   type: "PAYLOAD/ACTION",
 *   str: "a string",
 * }
 */

export { ASimpleAction, APayloadAction }
```

```ts
/**
 * Reducer
 */

export const reducer: Reducer<IState, ASimpleAction | APayloadAction> = (
  state = { stringInState: 'idle' },
  action,
) => {
  switch (action.type) {
    case ASimpleAction.TYPE:
      return {
        ...state,
        stringInState: 'updated string',
      }
    case APayloadAction.TYPE:
      return {
        ...state,
        stringInState: action.str,
      }
    default:
      return state
  }
}
```

```ts
/**
 * Map Dispatch To Props
 */

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  onSimpleClick: () => dispatch(ASimpleAction()),
  onPayloadClick: (str: string) => dispatch(APayloadAction({ str })),
})
```

## Tips

The aim of this project is to reduce boilerplate but also aid readability of
action files. Ideally, the action and types will fit on one line each. However,
Prettier's 80 character line-length limit may make this difficult. One way to
give yourself more characters, is to export all the actions at the end of the
file:

```ts
const ASimpleAction = a('SIMPLE/ACTION')
type ASimpleAction = ReturnType<typeof ASimpleAction>

const APayloadAction = a('PAYLOAD/ACTION', {} as { str: string })
type APayloadAction = ReturnType<typeof APayloadAction>

export { ASimpleAction, APayloadAction }
```

If you have many actions in a file, separating the action construction and the
TS type declarations aids readability. You will soon realise if you've forgotten
the TS type when you come to use it in reducers, tests etc.

```ts
const ASimpleAction = a('SIMPLE/ACTION')
const APayloadAction = a('PAYLOAD/ACTION', {} as { str: string })
const AOtherPayloadAction = a('PAYLOAD/OTHER_ACTION', {} as { num: number })

type ASimpleAction = ReturnType<typeof ASimpleAction>
type APayloadAction = ReturnType<typeof APayloadAction>
type AOtherPayloadAction = ReturnType<typeof AOtherPayloadAction>

export { ASimpleAction, APayloadAction, AOtherPayloadAction }
```

Depending on your tslint config, the payload object can either be written as

```ts
{} as { str: string }
```

or

```ts
<{ str: string }>{}
```

## Development

Clone repo and install dependencies using NPM:

```sh
npm i
```

Source for `a` can be found in `src/a.ts`.

Run the demo redux app using:

```sh
npm start
```

## License

MIT. See the [LICENSE](LICENSE) file for more information.

## Publishing

Remember to update the [CHANGELOG](CHANGELOG.md) and bump the version number
using `npm version patch`, `npm version minor`, or `npm version major`. Publish
to registry using `npm publish --access public`.

## Credits

This project was inspired by [Nicholas Jamieson](https://github.com/cartant)'s
[ts-action](https://github.com/cartant/ts-action) package. Many thanks to him
and for his swift answers to questions.

Also thanks to the person who wrote
[this post](https://qiita.com/terrierscript/items/b9687f610a96ab964ab2), you set
us on a path to understanding more about Typescript.
