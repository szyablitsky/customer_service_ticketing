import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeFilter } from '../../actions/requests'
import RequestsFilter from '../../components/requests/filter'

export default connect(
  () => ({}),
  (dispatch) => bindActionCreators({ changeFilter }, dispatch)
)(RequestsFilter)
