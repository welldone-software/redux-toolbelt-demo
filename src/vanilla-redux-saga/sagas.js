import { takeLatest, call, all, put, select } from 'redux-saga/effects'

import { LOGIN, LOAD_PROFILE, LOAD_CUSTOMERS, LOAD_ORDERS } from './consts'

import {
  loadProfile, loadProfileSuccess, loadProfileFailure,
  loadCustomers, loadCustomersSuccess, loadCustomersFailure,
  loadOrders, loadOrdersSuccess, loadOrdersFailure
} from './actions'

import { fetchUserProfile, fetchCustomers, fetchOrders } from '../common/services/api'

function* loadProfileSaga({ payload: userName }){
  try {
    const result = yield call(fetchUserProfile, userName)
    yield put(loadProfileSuccess(result))
  }
  catch(error){
    yield put(loadProfileFailure(error))
  }
}

function* loadCustomersSaga({ payload: userName }){
  try {
    const result = yield call(fetchCustomers, userName)
    yield put(loadCustomersSuccess(result))
  }
  catch(error){
    yield put(loadCustomersFailure(error))
  }
}

function* loadOrdersSaga({ payload: userName }){
  try {
    const result = yield call(fetchOrders, userName)
    yield put(loadOrdersSuccess(result))
  }
  catch(error){
    yield put(loadOrdersFailure(error))
  }
}

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
    takeLatest(LOGIN, loginSaga),
    takeLatest(LOAD_PROFILE, loadProfileSaga),
    takeLatest(LOAD_CUSTOMERS, loadCustomersSaga),
    takeLatest(LOAD_ORDERS, loadOrdersSaga)
  ])
}
