import {
  LOAD_CUSTOMERS, LOAD_CUSTOMERS_SUCCESS, LOGOUT
} from '../consts'

const defaultState = {
  data: undefined,
  loading: false
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case (LOAD_CUSTOMERS): {
      return {
        ...state,
        loading: true
      }
    }
    case (LOAD_CUSTOMERS_SUCCESS): {
      return {
        ...state,
        data: payload,
        loading: false
      }
    }
    case (LOGOUT): {
      return {
        ...state,
        data: null
      }
    }
    default:
      return state
  }
}