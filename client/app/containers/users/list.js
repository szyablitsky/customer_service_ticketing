import { connect } from 'react-redux'

import UsersList from '../../components/users/list'

export default connect(
  (state) => ({
    ids: state.users.ids,
    fetching: state.users.fetching,
  })
)(UsersList)
