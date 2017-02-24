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

import UserInfo from '../../app/components/user_info'

suite('UserInfo', () => {
  test('does not throw error without props', (done) => {
    const wrapper = shallow(<UserInfo/>)
    expect(wrapper).to.exist()
    done()
  })

  test('renders props', (done) => {
    const wrapper = render(<UserInfo loggedIn={true} name='user' role='admin'/>)
    expect(wrapper.text()).to.contain('user')
    expect(wrapper.text()).to.contain('(admin)')
    done()
  })

  test('does not render customer role', (done) => {
    const wrapper = render(<UserInfo loggedIn={true} name='user' role='customer'/>)
    expect(wrapper.text()).to.contain('user')
    expect(wrapper.text()).to.not.contain('customer')
    done()
  })

  test('handles signOut event', (done) => {
    const onClick = sinon.spy()
    const wrapper = mount(<UserInfo loggedIn={true} signOut={onClick}/>)
    wrapper.find('a').simulate('click')
    expect(onClick.calledOnce).to.equal(true)
    done()
  })
})
