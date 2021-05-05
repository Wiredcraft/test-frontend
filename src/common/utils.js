import {
  BASE_CDN_URL,
  SM_WIDTH_COLUMN_COUNT,
  MD_WIDTH_COLUMN_COUNT,
  LG_WIDTH_COLUMN_COUNT,
  XL_WIDTH_COLUMN_COUNT,
  SM,
  MD,
  LG,
  XL,
  SM_WIDTH,
  MD_WIDTH,
  LG_WIDTH,
} from './constants'

export function getCDNImageUrl(path) {
  return `${BASE_CDN_URL}/${path}`
}

export function getColumnCountByDeviceSize(size) {
  const sizeToColumnMap = {
    [SM]: SM_WIDTH_COLUMN_COUNT,
    [MD]: MD_WIDTH_COLUMN_COUNT,
    [LG]: LG_WIDTH_COLUMN_COUNT,
    [XL]: XL_WIDTH_COLUMN_COUNT,
  }

  return sizeToColumnMap[size]
}

export function getDeviceSizeByWidth(width) {
  if (width <= SM_WIDTH) return SM
  if (width <= MD_WIDTH && width > SM_WIDTH) return MD
  if (width <= LG_WIDTH && width > MD_WIDTH) return LG
  return XL
}

export function calcAverageImgWidth(width, column, columnGap) {
  return (width - columnGap * (column - 1)) / column
}

export function getHeightByRatio(width, ratio) {
  return width / ratio
}

export function debounce(func, delay, { trailing = false } = {}) {
  let isRunning = false
  let timer = null

  return function (...args) {
    if (!isRunning) {
      isRunning = true
      func.apply(this, args)
      clearTimeout(timer)
      timer = setTimeout(() => {
        isRunning = false
      }, delay)
    } else {
      clearTimeout(timer)
      timer = setTimeout(() => {
        isRunning = false
        if (trailing) {
          func.apply(this, args)
        }
      }, delay)
    }
  }
}
