import React, { PropTypes } from 'react'

export default class UserInfo extends React.Component {
  render() {
    const { loggedIn, name, role, signOut } = this.props
    if (!loggedIn) return null

    return (
      <div>
        {name}
        {role !== 'customer' && ` (${role})`}
        {' | '}
        <a href='#' className='app-title-link' onClick={signOut}>Sign Out</a>
      </div>
    )
  }
}

UserInfo.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  signOut: PropTypes.func.isRequired,
}
