import { makeAsyncActionCreator, makeActionCreator } from 'redux-toolbelt'
import { fetchUserProfile, fetchCustomers, fetchOrders } from '../services/api'

export const loadProfile = makeAsyncActionCreator('LOAD_PROFILE')
export const loadOrders = makeAsyncActionCreator('LOAD_CUSTOMERS')
export const loadCustomers = makeAsyncActionCreator('LOAD_CUSTOMERS')

export const login = () => {
  return (dispatch) => {
    dispatch({ type: 'LOGIN' })

    dispatch(loadProfile())
    fetchUserProfile()
      .then(userProfile => {
        dispatch(loadProfile.success(userProfile))
      })

    dispatch(loadCustomers())
    fetchCustomers()
      .then(customers => {
        dispatch(loadCustomers.success(customers))
      })

    dispatch(loadOrders())
    fetchOrders()
      .then(orders => {
        dispatch(loadOrders.success(orders))
      })
  }
}

login.TYPE = 'LOGIN'

export const logout = makeActionCreator('LOGOUT')