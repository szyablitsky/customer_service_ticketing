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

import Filter from '../../../app/components/requests/filter'

suite('RequestsFilter', () => {
  test('does not throw error without props', (done) => {
    const wrapper = shallow(<Filter/>)
    expect(wrapper).to.exist()
    done()
  })

  test('renders props', (done) => {
    const wrapper = render(<Filter title='label'/>)
    expect(wrapper.text()).to.contain('label')
    done()
  })

  test('handles changeFilter events', (done) => {
    const onClick = sinon.spy()
    const value = 'testFilter'
    const wrapper = mount(<Filter changeFilter={onClick} filter={value}/>)
    wrapper.find('a').simulate('click')
    expect(onClick.calledWith(value)).to.equal(true)
    done()
  })
})
