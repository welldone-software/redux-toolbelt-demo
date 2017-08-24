import React from 'react'
import { render } from 'react-dom'

import { createStore, applyMiddleware, bindActionCreators } from 'redux'
import { Provider } from 'react-redux'

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import Main from './components/Main'

/**************************************************
 *                                                *
 * here you decide if the application             *
 * should use the vanilla-redux or redux-toolbelt *
 *                                                *
 **************************************************/

/*******************************
 *      vanila-redux           *
 *******************************/
// import reducers from './vanilla-redux/reducers'
// import * as allActions from './vanilla-redux/actions'

/*******************************
 *    redux-toolbelt           *
 *******************************/
import reducers from './redux-toolbelt/reducers'
import * as allActions from './redux-toolbelt/actions'

const logger = createLogger()

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger
)(createStore)

const store = createStoreWithMiddleware(reducers)

const App = () => (
  <Provider store={store}>
    <Main actions={bindActionCreators(allActions, store.dispatch)}/>
  </Provider>
)

render(<App/>, document.getElementById('root'))
