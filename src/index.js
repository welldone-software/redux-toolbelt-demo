import 'babel-polyfill/dist/polyfill.js'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Main from './common/components/Main'
import createStore from './createStore'

/******************************************************
 *                                                    *
 *   here you decide if the application               *
 *   should use the vanilla-redux or redux-toolbelt   *
 *   and if it would use saga                         *
 *                                                    *
 ******************************************************/

const USE_REDUX_TOOLBELT = true
const USE_SAGA = true

/**************************************************
 **************************************************/

const { bindedActions, store } = createStore(USE_REDUX_TOOLBELT, USE_SAGA)

const title = [
  'running using',
  USE_REDUX_TOOLBELT ? 'redux-toolbelt' : 'vanilla-redux',
  USE_SAGA ? 'with' : 'without',
  'saga'
].join(' ')

const App = () => (
  <Provider store={store}>
    <Main actions={bindedActions} title={title}/>
  </Provider>
)

render(<App/>, document.getElementById('root'))
