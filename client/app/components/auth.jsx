import React, { PropTypes } from 'react'

import { SIGN_IN, SIGN_UP } from '../constants/auth/mode'
import FormField from 'shared/components/form_field'

const modes = {
  [SIGN_IN]: {
    title: 'Sign In',
    alternative: 'Register',
    target: SIGN_UP,
  },
  [SIGN_UP]: {
    title: 'Register',
    alternative: 'Sign In',
    target: SIGN_IN,
  },
}

export default class Auth extends React.Component {
  handleModeChange = () => {
    const { mode, changeMode } = this.props
    changeMode(modes[mode].target)
  }

  render() {
    const { mode, name, email, password, changeField } = this.props
    return (
      <div className='auth-container'>
        <form className='auth-form'>
          <header className='h1'>
            <span>{modes[mode].title}</span>
            <span className='auth-form-title-middle'> or </span>
            <span className='auth-form-change-mode' onClick={this.handleModeChange}>
              {modes[mode].alternative}
            </span>
          </header>
          {mode === SIGN_UP &&
            <FormField name='name' label='Your name' value={name} onChange={changeField}/>
          }
          <FormField name='email' label='Email' value={email} onChange={changeField}/>
          <FormField name='password' label='Password' value={password} onChange={changeField}/>
        </form>
      </div>
    )
  }
}

Auth.propTypes = {
  mode: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  submitting: PropTypes.bool.isRequired,
  changeMode: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
}
