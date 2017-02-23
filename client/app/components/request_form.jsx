import React, { PropTypes } from 'react'
import Redirect from 'react-router-dom/Redirect'
import Link from 'react-router-dom/Link'
import withRouter from 'react-router-dom/withRouter'

import FormField from 'shared/components/form_field'
import Button from 'shared/components/button'

class RequestForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const { create, push } = this.props
    create(push)
  }

  render() {
    const { loggedIn, customer, subject, description, errors, submitting, changeField } = this.props
    if (!loggedIn) return <Redirect to='/auth'/>
    if (!customer) return <Redirect to='/requests'/>

    return (
      <form onSubmit={this.handleSubmit}>
        <header className='h1'>Create new request</header>
        <FormField name='subject' label='Subject' errors={errors.subject}
                   value={subject} onChange={changeField}/>
        <FormField type='textarea' name='description' rows={2}
                   label='Description' errors={errors.description}
                   value={description} onChange={changeField}/>
        <div className='form-buttons'>
          <Button type='submit' title='Create' className='primary' loading={submitting}/>
          <Link to='/requests' className='button'>Cancel</Link>
        </div>
      </form>
    )
  }
}

RequestForm.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  customer: PropTypes.bool.isRequired,
  subject: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
  changeField: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
}

export default withRouter(RequestForm)
