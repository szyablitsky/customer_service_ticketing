import React, { PropTypes } from 'react'
import map from 'lodash/map'

import Comment from '../../containers/request/comment'
import CommentForm from '../../containers/request/comment_form'

export default class Comments extends React.Component {
  render() {
    const { requestId, comments } = this.props
    return (
      <div className='comments'>
        <header className='h2'>Comments</header>
        {comments.length === 0
          ? <div>no comments yet</div>
          : <ul className='comments-list'>
              {map(comments, (comment) =>
                <Comment key={comment.id} comment={comment}/>
              )}
            </ul>}
        <CommentForm requestId={requestId}/>
      </div>
    )
  }
}

Comments.propTypes = {
  requestId: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
}
