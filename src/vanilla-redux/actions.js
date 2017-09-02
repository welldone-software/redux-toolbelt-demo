import {
  LOGIN, LOGOUT,
  LOAD_PROFILE, LOAD_PROFILE_SUCCESS,
  LOAD_CUSTOMERS, LOAD_CUSTOMERS_SUCCESS,
  LOAD_ORDERS, LOAD_ORDERS_SUCCESS
} from './consts/actionNames'

import { fetchUserProfile, fetchCustomers, fetchOrders } from '../common/services/api'

export const login = () => {
  return (dispatch, getState) => {
    dispatch({ type: LOGIN })

    dispatch({ type: LOAD_PROFILE })
    fetchUserProfile()
      .then(userProfile => {
        dispatch({
          type: LOAD_PROFILE_SUCCESS,
          payload: userProfile
        })
      })

    dispatch({ type: LOAD_CUSTOMERS })
    fetchCustomers()
      .then(customers => {
        dispatch({
          type: LOAD_CUSTOMERS_SUCCESS,
          payload: customers
        })
      })
      
    dispatch({ type: LOAD_ORDERS })
    fetchOrders()
      .then(orders => {
        dispatch({
          type: LOAD_ORDERS_SUCCESS,
          payload: orders
        })
      })
  }
}

export const logout = () => ({
  type: LOGOUT
})