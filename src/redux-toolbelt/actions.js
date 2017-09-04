import { makeAsyncActionCreator, makeActionCreator } from 'redux-toolbelt'
import {
  fetchUserProfile, fetchCustomers, fetchOrders
} from '../common/services/api'

export const changeUserName = makeActionCreator('CHANGE_USERNAME')

export const loadProfile = makeAsyncActionCreator('LOAD_PROFILE')
export const loadCustomers = makeAsyncActionCreator('LOAD_CUSTOMERS')
export const loadOrders = makeAsyncActionCreator('LOAD_ORDERS')

export const logout = makeActionCreator('LOGOUT')

export const login = () => {
  return (dispatch) => {
    dispatch({ type: 'LOGIN' })

    dispatch(loadProfile())
    fetchUserProfile().then(
      userProfile => dispatch(loadProfile.success(userProfile)),
      error => dispatch(loadProfile.failure(error))
    )

    dispatch(loadCustomers())
    fetchCustomers().then(
      customers => dispatch(loadCustomers.success(customers)),
      error => dispatch(loadCustomers.failure(error))
    )

    dispatch(loadOrders())
    fetchOrders().then(
      orders => dispatch(loadOrders.success(orders)),
      error => dispatch(loadOrders.failure(error))
    )
  }
}

login.TYPE = 'LOGIN'