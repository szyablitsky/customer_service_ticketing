import React, { PropTypes } from 'react'

export default class UserInfo extends React.Component {
  render() {
    const { loggedIn, name, signOut } = this.props
    if (!loggedIn) return null

    return (
      <div>
        {`${name} | `}
        <a href='#' className='sign-out-link' onClick={signOut}>Sign Out</a>
      </div>
    )
  }
}

UserInfo.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  signOut: PropTypes.func.isRequired,
}
