import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import omit from 'lodash/omit'

import reducers, { initialStates } from './reducers/'
import { loadState } from 'shared/local_storage'

export default () => {
  const userState = loadState('user') || {}
  const initialState = {
    ...initialStates,
    user: {
      ...initialStates.user,
      ...omit(userState, 'user'),
      ...userState.user,
    },
  }

  const enhancers = compose(
    applyMiddleware(thunkMiddleware),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : (f) => f
  )

  return createStore(reducers, initialState, enhancers)
}
