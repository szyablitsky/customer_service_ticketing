import React, { PropTypes } from 'react'

export default class RequestInfo extends React.Component {
  render() {
    const { request } = this.props
    if (!request) return <div>Not found</div>

    return (
      <div className='request-info'>
        <div className='subject'>{request.subject}</div>
        <div>{request.description}</div>
      </div>
    )
  }
}

RequestInfo.propTypes = {
  request: PropTypes.object,
}
