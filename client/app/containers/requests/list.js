import { connect } from 'react-redux'

import RequestsList from '../../components/requests/list'
import { filteredRequestIds } from '../../selectors/requests'

export default connect(
  (state) => ({
    ids: filteredRequestIds(state),
    fetching: state.requests.fetching,
  })
)(RequestsList)
