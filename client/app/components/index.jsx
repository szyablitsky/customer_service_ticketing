import React from 'react'
import Link from 'react-router-dom/Link'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'
import Redirect from 'react-router-dom/Redirect'

import UserInfo from '../containers/user_info'
import Auth from '../containers/auth'
import RequestCreate from '../containers/request_create'
import Requests from '../containers/requests/'
import Request from '../containers/request/'

const App = () =>
  <div>
    <header className='app-header'>
      <div className='container'>
        <Link to='/requests'>
          <div className='app-title'>Customer Service</div>
          <div className='app-title-small'>CS</div>
        </Link>
        <UserInfo/>
      </div>
    </header>
    <main>
      <div className='container'>
        <Switch>
          <Route path='/auth' component={Auth}/>
          <Route path='/requests/new' component={RequestCreate}/>
          <Route path='/requests/:id' component={Request}/>
          <Route path='/requests' component={Requests}/>
          <Redirect to='/requests'/>
        </Switch>
      </div>
    </main>
  </div>

export default App
