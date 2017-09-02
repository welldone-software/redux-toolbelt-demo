import { combineReducers } from 'redux'

import profileReducer from './profileReducer'
import customersReducer from './customersReducer'
import ordersReducer from './ordersReducer'

export default combineReducers({
  profile: profileReducer,
  customers: customersReducer,
  orders: ordersReducer
})
