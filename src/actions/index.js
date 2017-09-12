export const SET_LEVEL = 'SET_LEVEL';
export const SET_KEYWORD = 'SET_KEYWORD';

export const setLevel = (level) => ({
  type: SET_LEVEL,
  level
})

export const setKeyWord = (keyWord) => ({
  type: SET_KEYWORD,
  keyWord
})