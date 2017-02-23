import React, { PropTypes } from 'react'

import RequestItem from '../../containers/requests/item'

export default class RequestsList extends React.Component {
  render() {
    const { ids, fetching } = this.props
    if (ids.length === 0) {
      if (fetching) return <div>Loading...</div>
      return <div>You have no requests of this type</div>
    }

    return (
      <ul className='requests-list'>
        {ids.map((id) => <RequestItem key={id} id={id}/>)}
      </ul>
    )
  }
}

RequestsList.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.number).isRequired,
  fetching: PropTypes.bool.isRequired,
}
