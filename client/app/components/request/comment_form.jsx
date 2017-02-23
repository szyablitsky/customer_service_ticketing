import React, { PropTypes } from 'react'

import FormField from 'shared/components/form_field'
import Button from 'shared/components/button'

export default class CommentForm extends React.Component {
  state = { content: '' }

  handleChange = (content) => this.setState({ content })

  handleSubmit = (e) => {
    e.preventDefault()
    const { requestId, comment } = this.props
    comment(requestId, this.state.content)
  }

  render() {
    return (
      <form className='comment-form' onSubmit={this.handleSubmit}>
        <div className='h2'>New comment</div>
        <FormField type='textarea' rows={2} value={this.state.content} onChange={this.handleChange}/>
        <Button type='submit' className='primary' title='Submit' loading={this.props.commenting}/>
      </form>
    )
  }
}

CommentForm.propTypes = {
  requestId: PropTypes.number.isRequired,
  commenting: PropTypes.bool.isRequired,
  comment: PropTypes.func.isRequired,
}
