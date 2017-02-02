import { RECEIVE_PICKS } from '../constants'

const picks = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PICKS:
      return action.picks
    default:
      return state
  }
}

export default picks
