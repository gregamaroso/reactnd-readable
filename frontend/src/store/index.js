import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import categories from '../reducers/'   // chang to store/Categories/reducers
import * as api from '../util/api'

const configureStore = () => {
  let middlewares = [thunk.withExtraArgument(api)]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  return createStore(
    categories,
    applyMiddleware(...middlewares)
  )
}

export default configureStore
