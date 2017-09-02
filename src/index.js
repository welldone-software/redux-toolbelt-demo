import React from 'react'
import { render } from 'react-dom'

import { createStore, applyMiddleware, bindActionCreators } from 'redux'
import { Provider } from 'react-redux'

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import Main from './components/Main'

import vanillaReducers from './vanilla-redux/reducers'
import * as vanillaActions from './vanilla-redux/actions'
import toolbeltReducers from './redux-toolbelt/reducers'
import * as toolbeltActions from './redux-toolbelt/actions'

/**************************************************
 *                                                *
 * here you decide if the application             *
 * should use the vanilla-redux or redux-toolbelt *
 *                                                *
 **************************************************/

const USE_VANILLA_REDUX = false

/**************************************************
 **************************************************/

const reducers = USE_VANILLA_REDUX ? vanillaReducers : toolbeltReducers
const actions = USE_VANILLA_REDUX ? vanillaActions : toolbeltActions

const logger = createLogger()

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger
)(createStore)

const store = createStoreWithMiddleware(reducers)

const App = () => (
  <Provider store={store}>
    <Main actions={bindActionCreators(actions, store.dispatch)}/>
  </Provider>
)

render(<App/>, document.getElementById('root'))
