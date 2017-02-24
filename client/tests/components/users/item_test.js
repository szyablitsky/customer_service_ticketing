/* eslint-env node */

import React from 'react'
import Code from 'code'
import Lab from 'lab'
import sinon from 'sinon'
const lab = exports.lab = Lab.script()

import { render, mount } from 'enzyme'

const suite = lab.suite
const test = lab.test
const expect = Code.expect

import Item from '../../../app/components/users/item'

suite('UsersItem', () => {
  const name = 'Test User'
  const email = 'user@example.com'
  const role = 'support'
  const user = { name, email, role }

  test('renders props', (done) => {
    const wrapper = render(<Item user={user}/>)
    expect(wrapper.text()).to.contain(
      `${name} ${email} (${role}) -- change role tocustomeradmin`
    )
    done()
  })

  test('handles changeRole event', (done) => {
    const onClick = sinon.spy()
    const wrapper = mount(<Item user={user} changeRole={onClick}/>)
    wrapper.find('a').last().simulate('click')
    expect(onClick.calledWith(user, 'admin')).to.equal(true)
    done()
  })
})
