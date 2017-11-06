// Fixes the polyfill warning
const raf = global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0)
}

export default raf
