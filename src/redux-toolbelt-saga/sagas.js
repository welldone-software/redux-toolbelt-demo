import { takeLatest, all, put, fork, select } from 'redux-saga/effects'
import { makeAsyncSaga } from 'redux-toolbelt-saga'

import { login, loadProfile, loadCustomers, loadOrders } from './actions'

import { fetchUserProfile, fetchCustomers, fetchOrders } from '../common/services/api'

function* loginSaga(){
  const { userName } = yield select()
  yield all([
    put(loadProfile(userName)),
    put(loadCustomers(userName)),
    put(loadOrders(userName))
  ])
}

export default function* sagas() {
  yield all([
    takeLatest(login.TYPE, loginSaga),
    fork(makeAsyncSaga(loadProfile, fetchUserProfile)),
    fork(makeAsyncSaga(loadCustomers, fetchCustomers)),
    fork(makeAsyncSaga(loadOrders, fetchOrders))
  ])
}
