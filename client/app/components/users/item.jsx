import React, { PropTypes } from 'react'
import TimeAgo from 'react-timeago'
import without from 'lodash/without'

import { roles } from '../../constants/roles'

export default class UserItem extends React.Component {
  handleChangeRole = (role) => (e) => {
    e.preventDefault()
    const { user, changeRole } = this.props
    changeRole(user, role)
  }

  render() {
    const { user: { name, email, role, createdAt } } = this.props
    const alternativeRoles = without(roles, role)
    return (
      <li className='user-item'>
        <div>{name} <i>{email}</i> ({role}) -- change role to
          <span>
            {alternativeRoles.map((alternativeRole) =>
              <a key={alternativeRole} href='' className='link role'
                 onClick={this.handleChangeRole(alternativeRole)}>
                {alternativeRole}
              </a>
            )}
          </span>
        </div>
        <div className='time-ago'>registered <TimeAgo date={createdAt}/></div>
      </li>
    )
  }
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
  changeRole: PropTypes.func.isRequired,
}
