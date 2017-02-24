import React, { PropTypes } from 'react'
import TimeAgo from 'react-timeago'

export default class UserItem extends React.Component {
  render() {
    const { user: { name, email, role, createdAt } } = this.props
    return (
      <li className='user-item'>
        <div>{name} <i>{email}</i> ({role})</div>
        <div className='time-ago'>registered <TimeAgo date={createdAt}/></div>
      </li>
    )
  }
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}
