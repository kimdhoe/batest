import { SELECT, SELECT_NEXT } from '../constants'

const selected = (state = 0, action) => {
  switch (action.type) {
    case SELECT:
      return action.selected
    case SELECT_NEXT:
      return (state + 1) % 5
    default:
      return state
  }
}

export default selected
