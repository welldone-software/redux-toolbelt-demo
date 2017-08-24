import {
  LOGIN, LOGOUT,
  FETCH_PROFILE, FETCH_PROFILE_SUCCESS,
  FETCH_CUSTOMERS, FETCH_CUSTOMERS_SUCCESS,
  FETCH_ORDERS, FETCH_ORDERS_SUCCESS
} from '../consts/actionNames'

import { fetchUserProfile, fetchCustomers, fetchOrders } from '../../services/api'

export const login = () => {
  return (dispatch, getState) => {
    dispatch({ type: LOGIN })

    dispatch({ type: FETCH_PROFILE })
    fetchUserProfile()
      .then(userProfile => {
        dispatch({
          type: FETCH_PROFILE_SUCCESS,
          payload: userProfile
        })
      })

    dispatch({ type: FETCH_CUSTOMERS })
    fetchCustomers()
      .then(customers => {
        dispatch({
          type: FETCH_CUSTOMERS_SUCCESS,
          payload: customers
        })
      })
      
    dispatch({ type: FETCH_ORDERS })
    fetchOrders()
      .then(orders => {
        dispatch({
          type: FETCH_ORDERS_SUCCESS,
          payload: orders
        })
      })
  }
}

export const logout = () => ({
  type: LOGOUT
})