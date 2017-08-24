import { makeAsyncReducer, composeReducers } from 'redux-toolbelt'
// import { updateObjectProperties } from 'redux-toolbelt-immutable-helpers'
import { loadCustomers, loadOrders, loadProfile, logout } from './actions'

export default composeReducers(
  {
    profile: makeAsyncReducer(loadProfile),
    customers: makeAsyncReducer(loadCustomers),
    orders: makeAsyncReducer(loadOrders)
  },
  (state = {}, {type, payload}) => {
    switch (type) {
      case logout.TYPE:
        return {
          ...state,
          profile: {
            ...state.profile,
            data: null
          },
          customers: {
            ...state.customers,
            data: null
          },
          orders: {
            ...state.orders,
            data: null
          }
        }
      default:
        return state
    }
  }
)
