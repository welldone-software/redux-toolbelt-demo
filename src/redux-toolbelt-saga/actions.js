import { makeAsyncActionCreator, makeActionCreator } from 'redux-toolbelt'

export const loadProfile = makeAsyncActionCreator('LOAD_PROFILE')
export const loadCustomers = makeAsyncActionCreator('LOAD_CUSTOMERS')
export const loadOrders = makeAsyncActionCreator('LOAD_ORDERS')
export const login = makeActionCreator('LOGIN')
export const logout = makeActionCreator('LOGOUT')
