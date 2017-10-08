import {
  LOGOUT, LOAD_CUSTOMERS, LOAD_CUSTOMERS_SUCCESS, LOAD_CUSTOMERS_FAILURE
} from '../consts'

const defaultState = { loading: false }

export default (state = defaultState, { type, payload }) => {
  switch (type) {

    case (LOAD_CUSTOMERS): {
      return { loading: true }
    }

    case (LOAD_CUSTOMERS_SUCCESS): {
      return { loading: false, data: payload }
    }

    case (LOAD_CUSTOMERS_FAILURE): {
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
