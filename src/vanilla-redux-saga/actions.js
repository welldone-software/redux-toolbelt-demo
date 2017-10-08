import {
  LOGIN, LOGOUT, CHANGE_USER_NAME,
  LOAD_PROFILE, LOAD_PROFILE_SUCCESS, LOAD_PROFILE_FAILURE,
  LOAD_CUSTOMERS, LOAD_CUSTOMERS_SUCCESS, LOAD_CUSTOMERS_FAILURE,
  LOAD_ORDERS, LOAD_ORDERS_SUCCESS, LOAD_ORDERS_FAILURE
} from './consts'

export function login(){
  return { type: LOGIN }
}

export function logout(){
  return { type: LOGOUT }
}

export const changeUserName = newUserName => ({
  type: CHANGE_USER_NAME,
  payload: newUserName
})

// profile
export function loadProfile(userName){
  return { type: LOAD_PROFILE, payload: userName }
}

export function loadProfileSuccess(userProfile){
  return {
    type: LOAD_PROFILE_SUCCESS,
    payload: userProfile
  }
}

export function loadProfileFailure(error){
  return {
    type: LOAD_PROFILE_FAILURE,
    payload: error
  }
}


// customers
export function loadCustomers(userName){
  return { type: LOAD_CUSTOMERS, payload: userName }
}

export function loadCustomersSuccess(customers){
  return {
    type: LOAD_CUSTOMERS_SUCCESS,
    payload: customers
  }
}

export function loadCustomersFailure(error){
  return {
    type: LOAD_CUSTOMERS_FAILURE,
    payload: error
  }
}

// orders
export function loadOrders(userName){
  return { type: LOAD_ORDERS, payload: userName }
}

export function loadOrdersSuccess(orders){
  return {
    type: LOAD_ORDERS_SUCCESS,
    payload: orders
  }
}

export function loadOrdersFailure(error){
  return {
    type: LOAD_ORDERS_FAILURE,
    payload: error
  }
}
