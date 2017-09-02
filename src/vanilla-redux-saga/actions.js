import {
  LOGIN, LOGOUT,
  LOAD_PROFILE, LOAD_PROFILE_SUCCESS, LOAD_PROFILE_FAILURE,
  LOAD_CUSTOMERS, LOAD_CUSTOMERS_SUCCESS, LOAD_CUSTOMERS_FAILURE,
  LOAD_ORDERS, LOAD_ORDERS_SUCCESS, LOAD_ORDERS_FAILURE
} from './consts/actionNames'

export function login(){
  return { type: LOGIN }
}

export function logout(){
  return { type: LOGOUT }
}

// profile
export function loadProfile(){
  return { type: LOAD_PROFILE }
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
export function loadCustomers(){
  return { type: LOAD_CUSTOMERS }
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
export function loadOrders(){
  return { type: LOAD_ORDERS }
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