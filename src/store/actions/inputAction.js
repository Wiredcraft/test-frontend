import { INPUT_UPDATE } from '../actions'

export const onInputChange = (inputText) => {
  return ({
    type: INPUT_UPDATE,
    payload: inputText
  })
}