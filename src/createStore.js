import { compact } from 'lodash'

import { createStore, applyMiddleware, bindActionCreators } from 'redux'

import { REDUX_STYLE_TYPES } from './common/consts'

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import * as vanillaActions from './vanilla-redux/actions'
import vanillaReducers from './vanilla-redux/reducers'

import * as toolbeltActions from './redux-toolbelt/actions'
import toolbeltReducers from './redux-toolbelt/reducers'

import * as toolbeltSagaActions from './redux-toolbelt-saga/actions'
import toolbeltSagas from './redux-toolbelt-saga/sagas'
import toolbeltSagaReducers from './redux-toolbelt-saga/reducers'

import * as toolbeltThunkActions from './redux-toolbelt-thunk/actions'
import toolbeltThunkReducers from './redux-toolbelt-thunk/reducers'

import * as vanillaReduxSagaActions from './vanilla-redux-saga/actions'
import vanillaReduxSagas from './vanilla-redux-saga/sagas'
import vanillaReduxSagaReducers from './vanilla-redux-saga/reducers'

const reducerVsReduxStyleMap = {
  [REDUX_STYLE_TYPES.VANILLA_REDUX]: {
    actions: vanillaActions,
    reducers: vanillaReducers
  },
  [REDUX_STYLE_TYPES.REDUX_TOOLBELT]: {
    actions: toolbeltActions,
    reducers: toolbeltReducers
  },
  [REDUX_STYLE_TYPES.REDUX_TOOLBELT_THUNK]: {
    actions: toolbeltThunkActions,
    reducers: toolbeltThunkReducers
  },
  [REDUX_STYLE_TYPES.REDUX_TOOLBELT_SAGA]: {
    actions: toolbeltSagaActions,
    sagas: toolbeltSagas,
    reducers: toolbeltSagaReducers
  },
  [REDUX_STYLE_TYPES.VANILLA_REDUX_SAGA]: {
    actions: vanillaReduxSagaActions,
    sagas: vanillaReduxSagas,
    reducers: vanillaReduxSagaReducers
  },
}

export default function(chosenReduxStyleType){
  const { actions, sagas, reducers } = reducerVsReduxStyleMap[chosenReduxStyleType]

  const sagaMiddleware = sagas && createSagaMiddleware()

  const middlewares = compact([
    thunk,
    createLogger(),
    sagaMiddleware
  ])

  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

  const store = createStoreWithMiddleware(reducers)

  if(sagas){
    sagaMiddleware.run(sagas)
  }

  return {
    store,
    bindedActions: bindActionCreators(actions, store.dispatch)
  }
}
