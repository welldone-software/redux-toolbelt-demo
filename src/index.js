import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Main from './common/components/Main'
import createStore from './createStore'

import { REDUX_STYLE_TYPES, REDUX_STYLE_TYPES_NAMES } from './common/consts'

/***********************************************
 *                                             *
 *   here you decide what redux style to use   *
 *   from the following enum object:           *
 *                                             *
 *   export const REDUX_STYLE_TYPES = {        *
 *     VANILLA_REDUX: 0,                       *
 *     REDUX_TOOLBELT: 1,                      *
 *     REDUX_TOOLBELT_THUNK: 2,                *
 *     REDUX_TOOLBELT_SAGA: 3,                 *
 *     VANILLA_REDUX_SAGA: 4                   *
 *   }                                         *
 *                                             *
 ***********************************************/

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
