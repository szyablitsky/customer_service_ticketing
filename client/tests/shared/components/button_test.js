/* eslint-env node */

import React from 'react'
import Code from 'code'
import Lab from 'lab'
import sinon from 'sinon'
const lab = exports.lab = Lab.script()

import { shallow, mount, render } from 'enzyme'

const suite = lab.suite
const test = lab.test
const expect = Code.expect

import Button from '../../../app/shared/components/button'

suite('Button', () => {
  test('does not throw error without props', (done) => {
    const wrapper = shallow(<Button/>)
    expect(wrapper).to.exist()
    done()
  })

  test('renders props', (done) => {
    const wrapper = render(<Button title='label'/>)
    expect(wrapper.text()).to.contain('label')
    done()
  })

  test('handles onClick events', (done) => {
    const onClick = sinon.spy()
    const wrapper = mount(<Button onClick={onClick}/>)
    wrapper.find('button').simulate('click')
    expect(onClick.calledOnce).to.equal(true)
    done()
  })
})
