import React, { PropTypes } from 'react'
import Redirect from 'react-router-dom/Redirect'
import Link from 'react-router-dom/Link'

import RequestsFilters from '../../containers/requests/filters'
import RequestsList from '../../containers/requests/list'

export default class Requests extends React.Component {
  componentWillMount() {
    this.props.fetch()
  }

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
        <RequestsFilters/>
        <RequestsList/>
      </div>
    )
  }
}

Requests.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  customer: PropTypes.bool.isRequired,
  fetch: PropTypes.func.isRequired,
}
