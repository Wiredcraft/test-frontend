// check if a string is a valid email
export const isEmail = (string) => {
  if (string.match(/^.+@.+\..+$/)) {
    return true
  } else {
    return false
  }
}