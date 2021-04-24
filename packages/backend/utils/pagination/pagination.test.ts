import {PhotoData} from '../../photos/photos'
import {pagination} from './pagination'

const MockData = require('../../photos/data.json')

describe('Test pagination', () => {
  it('should it works', () => {
    const {items, hasNext} = pagination<PhotoData>(MockData, 1, 10)
    expect(items.length).toBe(10)
    expect(items[0].index).toBe(0)
    expect(items[9].index).toBe(9)
    expect(hasNext).toBeTruthy()
  })

  it('should it works if page = 0', () => {
    const {items} = pagination<PhotoData>(MockData, 0, 10)
    expect(items.length).toBe(10)
    expect(items[0].index).toBe(0)
    expect(items[items.length - 1].index).toBe(9)
  })

  it('should it works if page = 2', () => {
    const {items} = pagination<PhotoData>(MockData, 2, 10)
    expect(items.length).toBe(10)
    expect(items[0].index).toBe(10)
    expect(items[items.length - 1].index).toBe(19)
  })

  it('should return empty if size < 0', () => {
    const {items} = pagination<PhotoData>(MockData, 1, -1)
    expect(items.length).toBe(0)
  })

  it('should it works if page = total page', () => {
    const {items, hasNext} = pagination<PhotoData>(MockData, 1, 100)
    expect(items.length).toBe(100)
    expect(items[0].index).toBe(0)
    expect(items[items.length - 1].index).toBe(99)
    expect(hasNext).toBeFalsy()
  })

  it('should it works if page > total page', () => {
    const {items, hasNext} = pagination<PhotoData>(MockData, 10, 100)
    expect(items.length).toBe(0)
    expect(hasNext).toBeFalsy()
  })
})
