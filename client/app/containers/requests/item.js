import { connect } from 'react-redux'

import RequestItem from '../../components/requests/item'

export default connect(
  (state, props) => ({
    request: state.entities.requests[props.id],
  })
)(RequestItem)
