import {
  LOGOUT, LOAD_CUSTOMERS, LOAD_CUSTOMERS_SUCCESS, LOAD_CUSTOMERS_FAILURE
} from '../consts/actionNames'

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
    case (LOAD_CUSTOMERS_FAILURE): {
      return {
        ...state,
        data: null,
        error: payload,
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