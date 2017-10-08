import { makeActionCreator } from 'redux-toolbelt'
import { makeThunkAsyncActionCreator } from 'redux-toolbelt-thunk'

import { fetchUserProfile, fetchCustomers, fetchOrders } from '../common/services/api'

export const changeUserName = makeActionCreator('CHANGE_USERNAME')

export const logout = makeActionCreator('LOGOUT')

export const loadProfile = makeThunkAsyncActionCreator('LOAD_PROFILE', tt => fetchUserProfile(tt))
export const loadCustomers = makeThunkAsyncActionCreator('LOAD_CUSTOMERS', fetchCustomers)
export const loadOrders = makeThunkAsyncActionCreator('LOAD_ORDERS', fetchOrders)

export const login = makeThunkAsyncActionCreator('LOGIN',
  (e, {dispatch, getState}) => Promise.all(
    [loadProfile(getState().userName), loadCustomers(), loadOrders()].map(dispatch)
  )
)
