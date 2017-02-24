/* eslint-env node */

import React from 'react'
import Code from 'code'
import Lab from 'lab'
const lab = exports.lab = Lab.script()

import { render } from 'enzyme'

const suite = lab.suite
const test = lab.test
const expect = Code.expect

import Comment from '../../../app/components/request/comment'

suite('Comment', () => {
  const content = 'Comment content'
  const comment = { content }

  test('renders customer props', (done) => {
    const name = 'User Name'
    const role = 'customer'
    const author = { name, role }

    const wrapper = render(<Comment comment={comment} author={author}/>)
    expect(wrapper.text()).to.contain(content)
    expect(wrapper.text()).to.contain(name)
    expect(wrapper.text()).to.not.contain(role)
    done()
  })

  test('renders admin props', (done) => {
    const name = 'User Name'
    const role = 'admin'
    const author = { name, role }

    const wrapper = render(<Comment comment={comment} author={author}/>)
    expect(wrapper.text()).to.contain(content)
    expect(wrapper.text()).to.contain(`${name} (${role})`)
    done()
  })
})
