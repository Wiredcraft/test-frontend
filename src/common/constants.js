import config from '../../static/config.json'

export const BASE_CDN_URL = 'https://img.lastwhisper.cn'

export const BASE_API_URL =
  process.env.NODE_ENV === 'development'
    ? `${config.dev.protocol}://${config.dev.host}:${config.dev.port}`
    : `${config.prod.protocol}://${config.prod}`

export const COLUMN_GAP = 14
export const SM = 'sm'
export const MD = 'md'
export const LG = 'lg'
export const XL = 'xl'

export const SM_WIDTH = 576
export const MD_WIDTH = 768
export const LG_WIDTH = 992

export const SM_WIDTH_COLUMN_COUNT = 2
export const MD_WIDTH_COLUMN_COUNT = 3
export const LG_WIDTH_COLUMN_COUNT = 4
export const XL_WIDTH_COLUMN_COUNT = 6
