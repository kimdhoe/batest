import { SELECT } from '../constants'

const selected = (state = 0, action) => {
  switch (action.type) {
    case SELECT:
      return action.selected
    default:
      return state
  }
}

export default selected
