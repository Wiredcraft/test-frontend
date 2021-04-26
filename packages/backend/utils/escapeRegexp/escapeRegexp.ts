/**
 * Escape RegExp special characters
 *
 * @param {String} str
 * @see https://github.com/sindresorhus/escape-string-regexp
 */
export const escapeRegexp = (str: string) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string')
  }
  return str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d')
}
