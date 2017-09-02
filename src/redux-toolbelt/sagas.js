import { takeLatest, all, put, fork } from 'redux-saga/effects'
import { makeAsyncSaga } from 'redux-toolbelt-saga'

import { login, loadProfile, loadCustomers, loadOrders } from './actions'
import { fetchUserProfile, fetchCustomers, fetchOrders } from '../services/api'

const loadProfileSaga = makeAsyncSaga(loadProfile, fetchUserProfile)
const loadCustomersSaga = makeAsyncSaga(loadCustomers, fetchCustomers)
const loadOrdersSaga = makeAsyncSaga(loadOrders, fetchOrders)

function* loginSaga(){
  yield all([
    put(loadProfile()),
    put(loadCustomers()),
    put(loadOrders())
  ])
}

function* sagas() {
  yield [
    takeLatest(login.TYPE, loginSaga),
    fork(loadProfileSaga),
    fork(loadCustomersSaga),
    fork(loadOrdersSaga),
  ]
}

export default sagas