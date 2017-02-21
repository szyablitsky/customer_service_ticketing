import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeMode, changeField, submit } from '../actions/auth'
import Auth from '../components/auth'

export default connect(
  (state) => ({
    mode: state.auth.mode,
    name: state.auth.fields.name,
    email: state.auth.fields.email,
    password: state.auth.fields.password,
    submitting: state.auth.submitting,
    errors: state.auth.errors,
  }),
  (dispatch) => bindActionCreators({ changeMode, changeField, submit }, dispatch)
)(Auth)
