import {
  LOGOUT, LOAD_ORDERS, LOAD_ORDERS_SUCCESS, LOAD_ORDERS_FAILURE
} from '../consts'

const defaultState = {
  data: undefined,
  loading: false
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case (LOAD_ORDERS): {
      return {
        ...state,
        loading: true
      }
    }
    case (LOAD_ORDERS_SUCCESS): {
      return {
        ...state,
        data: payload,
        loading: false
      }
    }
    case (LOAD_ORDERS_FAILURE): {
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
