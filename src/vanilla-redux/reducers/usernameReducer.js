import { CHANGE_USER_NAME } from '../consts'

const defaultState = 'user'

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case (CHANGE_USER_NAME): {
      return payload
    }
    default:
      return state
  }
}
