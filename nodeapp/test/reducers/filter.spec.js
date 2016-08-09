import expect from 'expect'
import filter from '../../app/reducers/filters';
import * as ACTION from '../../app/constants/ActionTypes'
import {FILTER_STATE, FILTER_DISTRICT, FILTER_TOWNSHIP} from '../../app/constants/FilterTypes'

describe('reducers', () => {
  describe('filter', () => {
    const initialState = {
      type: [FILTER_STATE, FILTER_DISTRICT, FILTER_TOWNSHIP],
      activeIndex: 0
    }

    it('should provide the initial state', () => {
      expect(filter(undefined, {})).toEqual(initialState)
    })

    it(`should handle ${ACTION.SET_FILTER} action`, () => {
      // when activeIndex is 0
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
      // when activeIndex is 1
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
      // when activeIndex is 2
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
      // when activeIndex is -1
      expect(
        filter(undefined, 
        { 
          type: ACTION.SET_FILTER,
          payload: {index: -1} 
        })
      ).toEqual({
        type: initialState.type,
        activeIndex: 0
      })
      // when activeIndex is 3
      expect(
        filter(undefined, 
        { 
          type: ACTION.SET_FILTER,
          payload: {index: 3} 
        })
      ).toEqual({
        type: initialState.type,
        activeIndex: 0
      })
    })
  })
})