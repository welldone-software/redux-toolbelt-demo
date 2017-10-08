import {
  LOGOUT, LOAD_PROFILE, LOAD_PROFILE_SUCCESS, LOAD_PROFILE_FAILURE
} from '../consts'

const defaultState = { loading: false }

export default (state = defaultState, { type, payload }) => {
  switch (type) {

    case (LOAD_PROFILE): {
      return { loading: true }
    }

    case (LOAD_PROFILE_SUCCESS): {
      return { loading: false, data: payload }
    }

    case (LOAD_PROFILE_FAILURE): {
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
