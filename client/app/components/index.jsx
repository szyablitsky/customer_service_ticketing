import React from 'react'
import Link from 'react-router-dom/Link'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'

import Auth from '../containers/auth'

const App = () =>
  <div>
    <header className='app-header'>
      <div className='container'>
        <div className='app-title'>Customer Service</div>
        <div className='app-title-small'>CS</div>
        <div>
          <Link to='/auth'>Auth</Link>
          <Link to='/requests'>Requests</Link>
        </div>
      </div>
    </header>
    <main>
      <div className='container'>
        <Switch>
          <Route path='/auth' component={Auth} />
          <Route path='/requests' render={() =>
            <div>Requests</div>
          } />
        </Switch>
      </div>
    </main>
  </div>

export default App
