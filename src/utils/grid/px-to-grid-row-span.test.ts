import {pxToGridRowSpan} from './px-to-grid-row-span'

describe('Test pxToGridRowSpan', () => {
  it('should works', () => {
    expect(pxToGridRowSpan(100, 10, 10)).toBe(5)
  })

  it('should works if height = 0', () => {
    expect(pxToGridRowSpan(0, 10, 10)).toBe(0)
  })

  it('should works if rowHeight = 0', () => {
    expect(pxToGridRowSpan(100, 0, 10)).toBe(10)
  })

  it('should works if gap = 0', () => {
    expect(pxToGridRowSpan(100, 10, 0)).toBe(10)
  })

  it('should works if all eq zero', () => {
    expect(pxToGridRowSpan(0, 0, 0)).toBe(0)
  })
})
