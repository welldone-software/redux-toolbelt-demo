import { takeLatest, call, all, put } from 'redux-saga/effects'

import {
  LOGIN, LOAD_PROFILE, LOAD_CUSTOMERS, LOAD_ORDERS
} from './consts'

import {
  loadProfile, loadProfileSuccess, loadProfileFailure,
  loadCustomers, loadCustomersSuccess, loadCustomersFailure,
  loadOrders, loadOrdersSuccess, loadOrdersFailure
} from './actions'

import {
  fetchUserProfile, fetchCustomers, fetchOrders
} from '../common/services/api'

function* loadProfileSaga(){
  try {
    const result = yield call(fetchUserProfile)
    yield put(loadProfileSuccess(result))
  }
  catch(error){
    yield put(loadProfileFailure(error))
  }
}

function* loadCustomersSaga(){
  try {
    const result = yield call(fetchCustomers)
    yield put(loadCustomersSuccess(result))
  }
  catch(error){
    yield put(loadCustomersFailure(error))
  }
}

function* loadOrdersSaga(){
  try {
    const result = yield call(fetchOrders)
    yield put(loadOrdersSuccess(result))
  }
  catch(error){
    yield put(loadOrdersFailure(error))
  }
}

function* loginSaga(){
  yield all([
    put(loadProfile()),
    put(loadCustomers()),
    put(loadOrders())
  ])
}

export default function* sagas() {
  yield all([
    takeLatest(LOGIN, loginSaga),
    takeLatest(LOAD_PROFILE, loadProfileSaga),
    takeLatest(LOAD_CUSTOMERS, loadCustomersSaga),
    takeLatest(LOAD_ORDERS, loadOrdersSaga)
  ])
}