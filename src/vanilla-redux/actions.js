import {
  LOGIN, LOGOUT, CHANGE_USER_NAME,
  LOAD_PROFILE, LOAD_PROFILE_SUCCESS, LOAD_PROFILE_FAILURE,
  LOAD_CUSTOMERS, LOAD_CUSTOMERS_SUCCESS, LOAD_CUSTOMERS_FAILURE,
  LOAD_ORDERS, LOAD_ORDERS_SUCCESS, LOAD_ORDERS_FAILURE
} from './consts'

import { fetchUserProfile, fetchCustomers, fetchOrders } from '../common/services/api'

export const changeUserName = newUserName => ({
  type: CHANGE_USER_NAME,
  payload: newUserName
})

export const logout = () => ({ type: LOGOUT })

export const login = () => {
  return (dispatch, getState) => {
    const { userName } = getState()

    dispatch({ type: LOGIN })

    dispatch({ type: LOAD_PROFILE })
    fetchUserProfile(userName).then(
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
    fetchCustomers(userName).then(
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
    fetchOrders(userName).then(
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
