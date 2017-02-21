import { connect } from 'react-redux'

import Auth from '../../components/auth/'

export default connect((state) => ({
  mode: state.auth.mode,
}))(Auth)
