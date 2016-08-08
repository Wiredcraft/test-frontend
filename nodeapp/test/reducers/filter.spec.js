import expect from 'expect'
import filter from '../../app/reducers/filters';
import * as ACTION from '../../app/constants/ActionTypes'

describe('reducers', () => {
  describe('filter', () => {
    const initialState = {
      type: ['state', 'district', 'township'],
      activeIndex: 0
    }

    it('should provide the initial state', () => {
      expect(filter(undefined, {})).toEqual(initialState)
    })

    it(`should handle ${ACTION.SET_FILTER} action`, () => {
      expect(
        filter(undefined, 
        { 
          type: ACTION.SET_FILTER,
          payload: {index: 0} 
        })
      ).toEqual({
        type: initialState.type,
        activeIndex: 0
      })

      expect(
        filter(undefined, 
        { 
          type: ACTION.SET_FILTER,
          payload: {index: 1} 
        })
      ).toEqual({
        type: initialState.type,
        activeIndex: 1
      })

      expect(
        filter(undefined, 
        { 
          type: ACTION.SET_FILTER,
          payload: {index: 2} 
        })
      ).toEqual({
        type: initialState.type,
        activeIndex: 2
      })
    })
  })
})
