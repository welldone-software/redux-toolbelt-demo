import { makeAsyncReducer, composeReducers } from 'redux-toolbelt'
import { updateObjectProperties } from 'redux-toolbelt-immutable-helpers'
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
        return updateObjectProperties(
          state,
          ['profile', 'customers', 'orders'],
          {loading: false, data: null}
        )
      default:
        return state
    }
  }
)
