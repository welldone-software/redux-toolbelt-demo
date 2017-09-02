import {
  LOGOUT, LOAD_PROFILE, LOAD_PROFILE_SUCCESS, LOAD_PROFILE_FAILURE
} from '../consts'

const defaultState = {
  data: undefined,
  loading: false
}

export default (state = defaultState, { type, payload }) => {
  switch(type){
    case (LOAD_PROFILE):{
      return {
        ...state,
        loading: true
      }
    }
    case (LOAD_PROFILE_SUCCESS): {
      return {
        ...state,
        data: payload,
        loading: false
      }
    }
    case (LOAD_PROFILE_FAILURE): {
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
