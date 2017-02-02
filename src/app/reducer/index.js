import { combineReducers } from 'redux'

import picks from './picks'
import selected from './selected'
import isFetching from './isFetching'

const reducer = combineReducers({ selected, picks, isFetching })

export default reducer
