import React, { PropTypes } from 'react'
import Link from 'react-router-dom/Link'

export default class RequestCreate extends React.Component {
  render() {
    return (
      <div>
        <header className='h1'>Create request</header>
        <Link to='/requests'>back</Link>
      </div>
    )
  }
}
