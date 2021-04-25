import {act, renderHook} from '@testing-library/react-hooks'
import {useInfinityRequest} from './useInfinityRequest'

const setup = () => renderHook(() => useInfinityRequest('test-url'))

const mockFetch = jest.fn((url: string) =>
  Promise.resolve({
    json: () => {
      if (url === 'test-url?page=1&size=20') {
        return Promise.resolve({
          data: {
            items: [{}],
            hasNext: true
          }
        })
      }
      return Promise.resolve({
        data: {
          items: [{}],
          hasNext: false
        }
      })
    }
  })
)

describe('Test useInfinityRequest', () => {
  beforeAll(() => {
    global.fetch = mockFetch as any
  })

  beforeEach(() => {
    mockFetch.mockClear()
  })

  it('should returns value', () => {
    const {result} = setup()
    expect(result.current.status).toBe('ready')
    expect(result.current.data).toEqual([])
    expect(typeof result.current.run).toBe('function')
    expect(typeof result.current.setParams).toBe('function')
    expect(typeof result.current.reset).toBe('function')
  })

  it('should not sends request on render', () => {
    const {rerender} = setup()
    expect(global.fetch).toBeCalledTimes(0)

    rerender()
    expect(global.fetch).toBeCalledTimes(0)
  })

  it('should sends a request when the `run` method called', async () => {
    const {result, waitForValueToChange} = setup()
    act(() => result.current.run())
    await waitForValueToChange(() => result.current.data)
    expect(mockFetch).toBeCalledTimes(1)
    expect(mockFetch).toHaveBeenLastCalledWith('test-url?page=1&size=20')
  })

  it('should sets state when request response', async () => {
    const {result, waitForValueToChange} = setup()
    act(() => result.current.run())
    await waitForValueToChange(() => result.current.data)
    expect(result.current.data.length).toBe(1)
    expect(result.current.data).toStrictEqual([{}])
  })

  it('should update `page` when `run` called two times', async () => {
    const {result, waitForValueToChange} = setup()

    act(() => result.current.run())
    await waitForValueToChange(() => result.current.data)
    act(() => result.current.run())
    await waitForValueToChange(() => result.current.data)

    expect(mockFetch).toBeCalledTimes(2)
    expect(mockFetch).toHaveBeenLastCalledWith('test-url?page=2&size=20')
  })

  it('should sets state when request response if `run` called two times', async () => {
    const {result, waitForValueToChange} = setup()

    act(() => result.current.run())
    await waitForValueToChange(() => result.current.data)
    act(() => result.current.run())
    await waitForValueToChange(() => result.current.data)

    expect(result.current.data.length).toBe(2)
    expect(result.current.data).toStrictEqual([{}, {}])
  })

  it('should no send request if touch the ending page', async () => {
    const {result, waitForValueToChange} = setup()

    act(() => result.current.run())
    await waitForValueToChange(() => result.current.data)
    act(() => result.current.run())
    await waitForValueToChange(() => result.current.data)
    act(() => result.current.run())

    // update nothing

    expect(mockFetch).toBeCalledTimes(2)
  })
})
