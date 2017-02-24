import React, { PropTypes } from 'react'

import FormField from 'shared/components/form_field'
import Button from 'shared/components/button'

export default class CommentForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const { requestId, create } = this.props
    create(requestId)
  }

  render() {
    const { content, errors, submitting, change } = this.props
    return (
      <form className='comment-form' onSubmit={this.handleSubmit}>
        <div className='h2'>New comment</div>
        <FormField type='textarea' rows={2} errors={errors.content}
                   value={content} onChange={change}/>
        <Button type='submit' className='primary' title='Submit' loading={submitting}/>
      </form>
    )
  }
}

CommentForm.propTypes = {
  requestId: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
  change: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
}
