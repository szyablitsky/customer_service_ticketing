/* eslint-env node */

import React from 'react'
import Code from 'code'
import Lab from 'lab'
const lab = exports.lab = Lab.script()

import { render } from 'enzyme'

const suite = lab.suite
const test = lab.test
const expect = Code.expect

import Info from '../../../app/components/request/info'

suite('RequestInfo', () => {
  const subject = 'Request subject'
  const description = 'Request description'
  const request = { subject, description }

  test('renders props', (done) => {
    const wrapper = render(<Info request={request}/>)
    expect(wrapper.text()).to.contain(subject)
    expect(wrapper.text()).to.contain(description)
    done()
  })

  test('renders not found if no request', (done) => {
    const wrapper = render(<Info request={null}/>)
    expect(wrapper.text()).to.contain('Not found')
    done()
  })
})
