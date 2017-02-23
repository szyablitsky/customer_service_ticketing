import React, { PropTypes } from 'react'
import TimeAgo from 'react-timeago'

const Comment = ({ comment, author }) =>
  <li className='comment'>
    <div>{comment.content}</div>
    <div className='comment-meta'>
      <TimeAgo date={comment.createdAt}/> by {author.name}
      {author.role !== 'customer' && <span> ({author.role})</span>}
    </div>
  </li>

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
}

export default Comment
