


export const debounce = (fn, wait, imme) => {
  let timer = 0;

  return function(...rest) {
    if (imme && !timer) {
      fn.apply(this, rest)
    }
    timer && clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, rest), wait)
  }
}