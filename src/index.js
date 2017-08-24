import React from 'react'
import { render } from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from './reducers'
import Main from './components/Main'

const logger = createLogger()

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger
)(createStore)

const store = createStoreWithMiddleware(reducers)

const App = () => (
  <Provider store={store}>
    <Main/>
  </Provider>
)

render(<App/>, document.getElementById('root'))
