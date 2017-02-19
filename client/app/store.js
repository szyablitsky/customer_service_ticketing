import { createStore } from 'redux'
import appReducer from './reducers/app'

const configureStore = (railsProps) => (
  createStore(appReducer, railsProps)
);

export default configureStore
