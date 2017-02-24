/* eslint-env node */

import Code from 'code'
import Lab from 'lab'
const lab = exports.lab = Lab.script()

const suite = lab.suite
const test = lab.test
const expect = Code.expect

import reducer, { initialState } from '../../app/reducers/auth'
import * as actionTypes from '../../app/constants/auth'

suite('auth reducer', () => {
  test('change mode', (done) => {
    const state = { mode: 'a', errors: { some: 'errors' } }
    const action = { type: actionTypes.CHANGE_MODE, mode: 'b' }
    expect(reducer(state, action)).to.equal({ mode: 'b', errors: {} })
    done()
  })

  test('change field', (done) => {
    const state = {
      fields: { some: 'value' },
      errors: { some: 'errors', other: 'errors' },
    }
    const action = { type: actionTypes.CHANGE_FIELD, name: 'some', value: 'new value' }
    expect(reducer(state, action)).to.equal({
      fields: { some: 'new value' },
      errors: { other: 'errors' },
    })
    done()
  })

  test('submit begin', (done) => {
    const state = { submitting: false }
    const action = { type: actionTypes.SUBMIT_BEGIN }
    expect(reducer(state, action)).to.equal({ submitting: true })
    done()
  })

  test('submit failure', (done) => {
    const state = { submitting: true }
    const action = { type: actionTypes.SUBMIT_FAILURE }
    expect(reducer(state, action)).to.equal({ submitting: false })
    done()
  })

  test('submit error', (done) => {
    const state = { submitting: true, errors: {} }
    const action = { type: actionTypes.SUBMIT_ERROR, errors: { some: 'errors' } }
    expect(reducer(state, action)).to.equal({
      submitting: false, errors: { some: 'errors' },
    })
    done()
  })

  test('submit success', (done) => {
    const state = { some: 'state' }
    const action = { type: actionTypes.SUBMIT_SUCCESS }
    expect(reducer(state, action)).to.equal(initialState)
    done()
  })

  test('default', (done) => {
    const state = { some: 'state' }
    const action = { type: 'unknown' }
    expect(reducer(state, action)).to.equal(state)
    done()
  })
})
