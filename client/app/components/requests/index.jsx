import React, { PropTypes } from 'react'
import Redirect from 'react-router-dom/Redirect'

export default class Requests extends React.Component {
  render() {
    const { loggedIn } = this.props
    if (!loggedIn) return <Redirect to='/auth'/>

    return (
      <div>
        Requests
      </div>
    )
  }
}

Requests.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
}
