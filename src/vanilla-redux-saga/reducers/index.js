import { combineReducers } from 'redux'

import profileReducer from './profileReducer'
import customersReducer from './customersReducer'
import ordersReducer from './ordersReducer'
import usernameReducer from './usernameReducer'

export default combineReducers({
  profile: profileReducer,
  customers: customersReducer,
  orders: ordersReducer,
  userName: usernameReducer
})
