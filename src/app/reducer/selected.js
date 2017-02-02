import { SELECT } from '../constants'

const selected = (state = 1, action) => {
  switch (action.type) {
    case SELECT:
      return action.selected
    default:
      return state
  }
}

export default selected
