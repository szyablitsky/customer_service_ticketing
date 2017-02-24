import React, { PropTypes } from 'react'
import Link from 'react-router-dom/Link'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'
import Redirect from 'react-router-dom/Redirect'

import UserInfo from '../containers/user_info'
import Auth from '../containers/auth'
import RequestForm from '../containers/request_form'
import Requests from '../containers/requests/'
import Request from '../containers/request/'
import Users from '../containers/users/'

const App = ({ admin }) =>
  <div>
    <header className='app-header'>
      <div className='container'>
        <Link to='/requests'>
          <div className='app-title'>Customer Service</div>
          <div className='app-title-small'>CS</div>
        </Link>
        {admin && <Link className='app-title-link' to='/users'>Users</Link>}
        <UserInfo/>
      </div>
    </header>
    <main>
      <div className='container'>
        <Switch>
          <Route path='/auth' component={Auth}/>
          <Route path='/requests/new' component={RequestForm}/>
          <Route path='/requests/:id' component={Request}/>
          <Route path='/requests' component={Requests}/>
          <Route path='/users' component={Users}/>
          <Redirect to='/requests'/>
        </Switch>
      </div>
    </main>
  </div>

App.propTypes = {
  admin: PropTypes.bool.isRequired,
}

export default App
