require('jest-fetch-mock').enableMocks()
const jest = require('jest-mock')

const observe = jest.fn()
const unobserve = jest.fn()

window.IntersectionObserver = jest.fn(() => ({
  observe,
  unobserve,
}))
