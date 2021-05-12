export function throttle(fn: Function, interval: number) {
  let prev = 0
  return function (this: Function) {
      let now = Date.now()
      if (now - prev > interval) {
          fn.apply(this, arguments)
          prev = now
      }
  }
}