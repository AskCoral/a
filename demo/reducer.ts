import { ATestAction, ASecondTestAction, AThirdTestAction } from './actions'
import { Reducer } from 'redux'

export interface IState {
  test: string
  test2: number
}
const initialState: IState = { test: 'bar', test2: 123 }

export const reducer: Reducer<
  IState,
  ATestAction | ASecondTestAction | AThirdTestAction
> = (state = initialState, action) => {
  switch (action.type) {
    case ATestAction.TYPE:
      return {
        ...state,
        test: state.test === 'bar' ? 'foo' : action.str,
      }
    case AThirdTestAction.TYPE:
      return {
        ...state,
        test2: action.num,
      }
    case ASecondTestAction.TYPE:
    default:
      return state
  }
}
