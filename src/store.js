import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import reducer from './app/reducer'
import { api } from './config'

const configureStore = () =>
  createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
  )

export default configureStore
