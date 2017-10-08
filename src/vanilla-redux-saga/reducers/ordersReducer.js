import {
  LOGOUT, LOAD_ORDERS, LOAD_ORDERS_SUCCESS, LOAD_ORDERS_FAILURE
} from '../consts'

const defaultState = { loading: false }

export default (state = defaultState, { type, payload }) => {
  switch (type) {

    case (LOAD_ORDERS): {
      return { loading: true }
    }

    case (LOAD_ORDERS_SUCCESS): {
      return { loading: false, data: payload }
    }

    case (LOAD_ORDERS_FAILURE): {
      return { loading: false, error: payload }
    }

    case (LOGOUT): {
      return defaultState
    }

    default: {
      return state
    }
  }
}
