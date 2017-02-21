import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers, { initialStates } from './reducers/'

export default () => {
  const enhancers = compose(
    applyMiddleware(thunkMiddleware),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : (f) => f
  )

  return createStore(reducers, initialStates, enhancers)
}
