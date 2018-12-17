import { SEARCH_UPDATE} from '../actions'

export const onSearchBtnClicked = (input) => {
  return ({
    type: SEARCH_UPDATE,
    payload: input
  })
}
