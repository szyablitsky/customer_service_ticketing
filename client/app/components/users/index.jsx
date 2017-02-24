import React, { PropTypes } from 'react'
import Redirect from 'react-router-dom/Redirect'

import UsersList from '../../containers/users/list'

export default class Users extends React.Component {
  componentWillMount() {
    this.props.fetch()
  }

  render() {
    const { loggedIn, admin } = this.props
    if (!loggedIn) return <Redirect to='/auth'/>
    if (!admin) return <Redirect to='/requests'/>

    return (
      <div>
        <header className='header-with-actions'>
          <div className='h1'>Users</div>
        </header>
        <UsersList/>
      </div>
    )
  }
}

Users.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  admin: PropTypes.bool.isRequired,
  fetch: PropTypes.func.isRequired,
}
