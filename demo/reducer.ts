import { ATestAction, ASecondTestAction, AThirdTestAction } from './actions'
import { Reducer } from 'redux'

export interface IState {
  test: string | number
}
const initialState: IState = { test: 'bar' }

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
        test: action.num,
      }
    case ASecondTestAction.TYPE:
    default:
      return state
  }
}
