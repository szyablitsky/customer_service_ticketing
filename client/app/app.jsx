import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './store'
import AppContainer from './containers/app'

const App = () => (
  <Provider store={configureStore()}>
    <AppContainer />
  </Provider>
)

export default App
