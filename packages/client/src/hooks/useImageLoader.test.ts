/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
import {act, renderHook} from '@testing-library/react-hooks'
import MockImage from '../../mock/image'
import {useImageLoader} from './useImageLoader'

describe('Test useImageLoader', () => {
  beforeAll(() => {
    jest.useFakeTimers()
    Object.defineProperty(global, 'Image', {value: MockImage})
  })

  it('should return failed when load fail', () => {
    const {result} = renderHook(() => useImageLoader('invalid'))
    expect(result.current[0]).toBe('loading')
    expect(result.current[1]).toBeUndefined()

    act(() => {
      jest.runAllTimers()
    })
    expect(result.current[0]).toBe('failed')
    expect(result.current[1]).toBeUndefined()
  })

  it('should return success when img loaded', () => {
    const {result} = renderHook(() => useImageLoader('success.png'))
    expect(result.current[0]).toBe('loading')

    act(() => {
      jest.runAllTimers()
    })
    expect(result.current[0]).toBe('success')
    expect(result.current[1]).toEqual({width: 100, height: 50})
  })

  it('should update status if image changed', () => {
    const {result, rerender} = renderHook(
      (props) => useImageLoader(props.src),
      {
        initialProps: {src: 'invalid'}
      }
    )
    act(() => {
      jest.runAllTimers()
    })
    expect(result.current[0]).toBe('failed')

    rerender({src: 'success.png'})

    act(() => {
      jest.runAllTimers()
    })
    expect(result.current[0]).toBe('success')
    expect(result.current[1]).toEqual({width: 100, height: 50})
  })
})
