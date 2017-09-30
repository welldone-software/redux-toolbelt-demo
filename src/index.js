import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Main from './common/components/Main'
import createStore from './createStore'

import { REDUX_STYLE_TYPES, REDUX_STYLE_TYPES_NAMES } from './common/consts'

if(!window.regeneratorRuntime){
  window.regeneratorRuntime = require('babel-runtime/regenerator')
}

/******************************************************
 *                                                    *
 *   here you decide if the application               *
 *   should use the vanilla-redux or redux-toolbelt   *
 *   and if it would use saga                         *
 *                                                    *
 ******************************************************/

const chosenReduxStyleType = REDUX_STYLE_TYPES.REDUX_TOOLBELT_THUNK

/**************************************************
 **************************************************/

const { bindedActions, store } = createStore(chosenReduxStyleType)
const title = `Running using ${REDUX_STYLE_TYPES_NAMES[chosenReduxStyleType]}.`

const App = () => (
  <Provider store={store}>
    <Main actions={bindedActions} title={title}/>
  </Provider>
)

render(<App/>, document.getElementById('root'))
