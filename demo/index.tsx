import * as React from 'react'
import { render } from 'react-dom'
import { createStore, Dispatch, ActionCreator } from 'redux'
import { connect, Provider } from 'react-redux'
import { reducer, IState } from './reducer'
import {
  ATestAction,
  ASecondTestAction,
  AThirdTestAction,
  AFSAAction,
} from './actions'
import { composeWithDevTools } from 'redux-devtools-extension'

const mapStateToProps = (state: IState) => ({
  test: state.test,
})

interface IDispatchProps {
  onTestAction: ActionCreator<ATestAction>
  onTestSecondAction: ActionCreator<ASecondTestAction>
  onTestThirdAction: ActionCreator<AThirdTestAction>
  onFSAAction: ActionCreator<AFSAAction>
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  onTestAction: () => dispatch(ATestAction({ str: 'bar' })),
  onTestSecondAction: () => dispatch(ASecondTestAction()),
  onTestThirdAction: () => dispatch(AThirdTestAction({ num: 123 })),
  onFSAAction: () => dispatch(AFSAAction('bar')),
})

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)((props: any) => (
  <div>
    <h1>a: Typesafe Redux action creation utility</h1>
    <div>Test value: {props.test}</div>
    <hr />
    <div>
      <pre>
        {`{
  type: TEST_ACTION,
  str: 'bar'
}`}
      </pre>
      <button onClick={props.onTestAction}>Action 1: Toggle foo/bar</button>
    </div>
    <hr />
    <div>
      <pre>
        {`{
  type: SECOND_TEST_ACTION,
}`}
      </pre>
      <button onClick={props.onTestSecondAction}>Action 2: Does nothing</button>
    </div>
    <hr />
    <div>
      <pre>
        {`{
  type: THIRD_TEST_ACTION,
  num: 123
}`}
      </pre>
      <button onClick={props.onTestThirdAction}>Action 3: Set to 123</button>
    </div>
    <hr />
    <div>
      <pre>
        {`{
  type: FSA,
  payload: 'bar'
}`}
      </pre>
      <button onClick={props.onFSAAction}>
        Action 4: FSA action ... Toggle foo/bar
      </button>
    </div>
  </div>
))

const store = createStore(reducer, composeWithDevTools())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
