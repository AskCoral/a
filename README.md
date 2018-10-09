# a: Typesafe Redux action creation utility

**NB: this hasn't been released on NPM yet.**

## Usage

```ts
/**
 * Actions
 */

import { a } from '@aventus/a'

// Simple action without payload
export const ASimpleAction = a('SIMPLE/ACTION')
export type ASimpleAction = ReturnType<typeof ASimpleAction.create>

// Action with payload
export const APayloadAction = a('PAYLOAD/ACTION', (str: string) => ({ str }))
export type APayloadAction = ReturnType<typeof APayloadAction.create>
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
  onSimpleClick: () => dispatch(ASimpleAction.create()),
  onPayloadClick: (str: string) => dispatch(APayloadAction.create(str)),
})
```

## Tips

The aim of this project it to reduce boilerplate but also aid readability of
action files. Ideally, the action and types will fit on one line each. However,
Prettier's 80 character line-length limit may make this difficult. One way to
give yourself more characters, is to export all the actions at the end of the
file:

```ts
const ASimpleAction = a('SIMPLE/ACTION')
type ASimpleAction = ReturnType<typeof ASimpleAction.create>

const APayloadAction = a('PAYLOAD/ACTION', (str: string) => ({ str }))
type APayloadAction = ReturnType<typeof APayloadAction.create>

export { ASimpleAction, APayloadAction }
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

## Publishing

Edit `src/a.ts` and build to lib folder before publishing:

```sh
npm run build
```

Remember to update the [CHANGELOG](CHANGELOG.md) and advance the version number
in the `package.json` file.

## Credits

This project was inspired by [Nicholas Jamieson](https://github.com/cartant)'s
[ts-action](https://github.com/cartant/ts-action) package. Many thanks to him
and for his swift answers to questions.

Also thanks to the person who wrote
[this post](https://qiita.com/terrierscript/items/b9687f610a96ab964ab2).