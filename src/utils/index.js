export const isEmail = (string) => {
  if (string.match(/^.+@.+\..+$/)) {
    return true
  } else {
    return false
  }
}