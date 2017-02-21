import React, { PropTypes } from 'react'

export default class Auth extends React.Component {
  render() {
    return (
      <div className='auth-container'>
        <form className='auth-form'>
          <header className='h1'>Test</header>
          <input />
        </form>
      </div>
    )
  }
}

Auth.propTypes = {
  mode: PropTypes.string.isRequired,
}
