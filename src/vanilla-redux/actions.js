import {
  LOGIN, LOGOUT,
  LOAD_PROFILE, LOAD_PROFILE_SUCCESS, LOAD_PROFILE_FAILURE,
  LOAD_CUSTOMERS, LOAD_CUSTOMERS_SUCCESS, LOAD_CUSTOMERS_FAILURE,
  LOAD_ORDERS, LOAD_ORDERS_SUCCESS, LOAD_ORDERS_FAILURE
} from './consts'

import {
  fetchUserProfile, fetchCustomers, fetchOrders
} from '../common/services/api'

export const login = () => {
  return (dispatch) => {
    dispatch({ type: LOGIN })

    dispatch({ type: LOAD_PROFILE })
    fetchUserProfile().then(
      userProfile => dispatch({
        type: LOAD_PROFILE_SUCCESS,
        payload: userProfile
      }),
      error => dispatch({
        type: LOAD_PROFILE_FAILURE,
        payload: error
      })
    )


    dispatch({ type: LOAD_CUSTOMERS })
    fetchCustomers().then(
      customers => dispatch({
        type: LOAD_CUSTOMERS_SUCCESS,
        payload: customers
      }),
      error => dispatch({
        type: LOAD_CUSTOMERS_FAILURE,
        payload: error
      })
    )
      
    dispatch({ type: LOAD_ORDERS })
    fetchOrders().then(
      orders => dispatch({
        type: LOAD_ORDERS_SUCCESS,
        payload: orders
      }),
      error => dispatch({
        type: LOAD_ORDERS_FAILURE,
        payload: error
      })
    )
  }
}

export const logout = () => ({ type: LOGOUT })