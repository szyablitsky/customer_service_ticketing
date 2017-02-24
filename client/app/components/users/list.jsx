import React, { PropTypes } from 'react'

import UserItem from '../../containers/users/item'

export default class UsersList extends React.Component {
  render() {
    const { ids, fetching } = this.props
    if (fetching) return <div>Loading...</div>

    return (
      <ul className='requests-list'>
        {ids.map((id) => <UserItem key={id} id={id}/>)}
      </ul>
    )
  }
}

UsersList.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.number).isRequired,
  fetching: PropTypes.bool.isRequired,
}
