import { connect } from 'react-redux'

import UserItem from '../../components/users/item'

export default connect(
  (state, props) => ({
    user: state.entities.users[props.id],
  })
)(UserItem)
