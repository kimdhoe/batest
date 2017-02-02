import { DONE_FETCHING } from '../constants'

const isFetching = (state = true, action) => {
  switch (action.type) {
    case DONE_FETCHING:
      return false
    default:
      return state
  }
}

export default isFetching
