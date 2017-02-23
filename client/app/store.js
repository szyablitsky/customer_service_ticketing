import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers, { initialStates } from './reducers/'
import { initialFilter } from './reducers/requests'
import { loadState } from 'shared/local_storage'

const initialState = () => {
  const user = loadState('user') || {}
  return {
    ...initialStates,
    user: {
      ...initialStates.user,
      ...user,
    },
    requests: {
      ...initialStates.requests,
      filter: initialFilter[user.role],
    },
  }
}

export default () => {
  const enhancers = compose(
    applyMiddleware(thunkMiddleware),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : (f) => f
  )

  return createStore(reducers, initialState(), enhancers)
}
