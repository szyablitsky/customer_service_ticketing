import React, { PropTypes } from 'react'
import Router from 'react-router-dom/BrowserRouter'
import Link from 'react-router-dom/Link'
import Route from 'react-router-dom/Route'

const App = ({ name }) =>
  <Router>
    <div>
      <header className='app-header'>
        <div className='container'>
          <div className='app-title'>Customer Service</div>
          <div className='app-title-small'>CS</div>
          <div>
            <Link to='/auth'>Auth</Link>
            <Link to='/requests'>Requests</Link>
            <span>{name}</span>
          </div>
        </div>
      </header>
      <main>
        <div className='container'>
            <Route path='/auth' render={() =>
              <div>Auth</div>
            } />
            <Route path='/requests' render={() =>
              <div>Requests</div>
            } />
            <div>test</div>
        </div>
      </main>
    </div>
  </Router>

App.propTypes = {
  name: PropTypes.string.isRequired,
}

export default App
