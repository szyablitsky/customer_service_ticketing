import React, { PropTypes } from 'react'
import Redirect from 'react-router-dom/Redirect'
import TimeAgo from 'react-timeago'

import RequestInfo from './info'
import Button from 'shared/components/button'

export default class Request extends React.Component {
  componentDidMount() {
    this.props.fetch()
  }

  handleClose = () => {
    const { request, close } = this.props
    close(request.id)
  }

  render() {
    const { loggedIn, fetching, customer, request, authorName } = this.props
    if (!loggedIn) return <Redirect to='/auth'/>

    const closable = customer && request && request.open

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
        {closable && <Button title='Close this request' onClick={this.handleClose}/>}
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
  fetch: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
}
