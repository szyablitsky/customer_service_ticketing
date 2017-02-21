import React from 'react'
import { Provider } from 'react-redux'
import Router from 'react-router-dom/BrowserRouter'

import store from './store'
import AppContainer from './components/app'

const App = () =>
  <Router>
    <Provider store={store()}>
      <AppContainer />
    </Provider>
  </Router>

export default App
