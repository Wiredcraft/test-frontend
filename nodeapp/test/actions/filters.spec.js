import expect from 'expect'
import * as actions from '../../app/actions/filters'
import * as ACTION from '../../app/constants/ActionTypes'

describe('filter actions', () => {
  it(`selected filter should create ${ACTION.SET_FILTER} action`, () => {
    expect(actions.setFilter(0)).toEqual({
      type: ACTION.SET_FILTER,
      payload: {
        index: 0
      }
    })
  })
})
