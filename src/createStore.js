import { compact } from 'lodash'

import { createStore, applyMiddleware, bindActionCreators } from 'redux'

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import vanillaReducers from './vanilla-redux/reducers'
import * as vanillaActions from './vanilla-redux/actions'

import vanillaSagaReducers from './vanilla-redux-saga/reducers'
import * as vanillaSagaActions from './vanilla-redux-saga/actions'
import vanillaSagas from './vanilla-redux-saga/sagas'

import toolbeltReducers from './redux-toolbelt/reducers'
import * as toolbeltActions from './redux-toolbelt/actions'

import toolbeltSagaReducers from './redux-toolbelt-saga/reducers'
import * as toolbeltSagaActions from './redux-toolbelt-saga/actions'
import toolbeltSagas from './redux-toolbelt-saga/sagas'


export default function(useReduxToolbelt, useSaga){
  const reducers = useReduxToolbelt ?
    (useSaga ? toolbeltSagaReducers : toolbeltReducers) :
    (useSaga ? vanillaSagaReducers : vanillaReducers)

  const actions = useReduxToolbelt ?
    (useSaga ? toolbeltSagaActions : toolbeltActions) :
    (useSaga ? vanillaSagaActions : vanillaActions)

  const sagas = useSaga && (
    useReduxToolbelt ? toolbeltSagas : vanillaSagas
  )

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