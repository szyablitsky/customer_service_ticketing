import React, { PropTypes } from 'react'
import Redirect from 'react-router-dom/Redirect'
import Link from 'react-router-dom/Link'

import RequestsSelector from '../../containers/requests/selector'
import RequestsList from '../../containers/requests/list'

export default class Requests extends React.Component {
  render() {
    const { loggedIn, customer } = this.props
    if (!loggedIn) return <Redirect to='/auth'/>

    return (
      <div>
        <header className='header-with-actions'>
          <div className='h1'>Requests</div>
          {customer &&
            <Link to='/requests/new' className='link'>create new request</Link>}
        </header>
        <RequestsSelector/>
        <RequestsList/>
      </div>
    )
  }
}

Requests.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  customer: PropTypes.bool.isRequired,
}
