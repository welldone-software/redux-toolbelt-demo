import {
  FETCH_PROFILE, FETCH_PROFILE_SUCCESS, LOGOUT
} from '../consts/actionNames'

const defaultState = {
  data: undefined,
  loading: false
}

export default (state = defaultState, { type, payload }) => {
  switch(type){
    case (FETCH_PROFILE):{
      return {
        ...state,
        loading: true
      }
    }
    case (FETCH_PROFILE_SUCCESS): {
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