import { takeLatest, all, put, fork } from 'redux-saga/effects'
import { makeAsyncSaga } from 'redux-toolbelt-saga'

import { login, loadProfile, loadCustomers, loadOrders } from './actions'

import {
  fetchUserProfile, fetchCustomers, fetchOrders
} from '../common/services/api'

function* loginSaga(){
  yield all([
    put(loadProfile()),
    put(loadCustomers()),
    put(loadOrders())
  ])
}

export default function* sagas() {
  yield all([
    takeLatest(login.TYPE, loginSaga),
    fork(makeAsyncSaga(loadProfile, fetchUserProfile)),
    fork(makeAsyncSaga(loadCustomers, fetchCustomers)),
    fork(makeAsyncSaga(loadOrders, fetchOrders)),
  ])
}
