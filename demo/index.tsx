import * as React from 'react'
import { render } from 'react-dom'
import { createStore, Dispatch, ActionCreator } from 'redux'
import { connect, Provider } from 'react-redux'
import { reducer, IState } from './reducer'
import { ATestAction, ASecondTestAction, AThirdTestAction } from './actions'
import { composeWithDevTools } from 'redux-devtools-extension'

const mapStateToProps = (state: IState) => ({
  test: state.test,
})

interface IDispatchProps {
  onTestAction: ActionCreator<ATestAction>
  onTestSecondAction: ActionCreator<ASecondTestAction>
  onTestThirdAction: ActionCreator<AThirdTestAction>
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  onTestAction: () => dispatch(ATestAction({ str: 'bar' })),
  onTestSecondAction: () => dispatch(ASecondTestAction()),
  onTestThirdAction: () => dispatch(AThirdTestAction({ num: 123 })),
})

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)((props: any) => (
  <div>
    <h1>a: Typesafe Redux action creation utility</h1>
    <div>{props.test}</div>
    <button onClick={props.onTestAction}>Action 1: Toggle foo/bar</button>
    <button onClick={props.onTestSecondAction}>Action 2: Does nothing</button>
    <button onClick={props.onTestThirdAction}>Action 3: Set to 123</button>
  </div>
))

const store = createStore(reducer, composeWithDevTools())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
