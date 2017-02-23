import React, { PropTypes } from 'react'
import Link from 'react-router-dom/Link'
import TimeAgo from 'react-timeago'

export default class RequestItem extends React.Component {
  render() {
    const { request: { id, subject, createdAt } } = this.props
    return (
      <li className='request-item'>
        <Link className='link' to={`/requests/${id}`}>{subject}</Link>
        <TimeAgo className='time-ago' date={createdAt}/>
      </li>
    )
  }
}

RequestItem.propTypes = {
  request: PropTypes.object.isRequired,
}
