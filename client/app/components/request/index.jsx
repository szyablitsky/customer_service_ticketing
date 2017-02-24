import React, { PropTypes } from 'react'
import Redirect from 'react-router-dom/Redirect'
import TimeAgo from 'react-timeago'

import RequestInfo from './info'
import Button from 'shared/components/button'
import Comments from '../../containers/request/comments'

export default class Request extends React.Component {
  componentWillMount() {
    this.props.commentReset()
    this.props.fetch()
  }

  handleClose = () => {
    const { request, close } = this.props
    close(request.id)
  }

  render() {
    const { loggedIn, fetching, customer, request, authorName, closing } = this.props
    if (!loggedIn) return <Redirect to='/auth'/>

    const closable = customer && request && request.open
    const closed = request && !request.open

    return (
      <div>
        <header className='header-with-actions'>
          <div className='h1'>Request</div>
          {Boolean(request) &&
            <div>
              <span>submitted <TimeAgo date={request.createdAt}/></span>
              {!customer && <span> by {authorName}</span>}
            </div>}
        </header>
        {fetching
          ? <div>Loading...</div>
          : <RequestInfo request={request}/>}
        {closable &&
          <Button title='Close this request' onClick={this.handleClose} Loading={closing}/>}
        {closed && <div className='closed-notice'>
          Request is closed.
          {customer && <span> You can reopen it by adding comment.</span>}
        </div>}
        {Boolean(request) && <Comments requestId={request.id}/>}
      </div>
    )
  }
}

Request.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  customer: PropTypes.bool.isRequired,
  request: PropTypes.object,
  authorName: PropTypes.string,
  closing: PropTypes.bool.isRequired,
  commentReset: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
}
