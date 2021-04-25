/* eslint-disable */
export const debounce = (func: (...args: any) => void, wait: number) => {
  let timer: any, stashed: any

  const run = () => {
    timer = setTimeout(() => {
      if (stashed) {
        func.apply(stashed[0], stashed[1])
        stashed = null
      }
      timer = null
    }, wait)
  }

  return function (...args: any) {
    if (timer) {
      // @ts-ignore
      stashed = [this, args]
      clearTimeout(timer)
      run()
      return
    }

    // @ts-ignore
    stashed = [this, args]
    run()
  }
}
