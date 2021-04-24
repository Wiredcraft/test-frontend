type PaginationResult<T> = {
  items: T[]
  page: number
  size: number
  total: number
  hasNext: boolean
}

/**
 * Split data to pagination result
 *
 * @param {Array} data
 * @param {number} page - page index, start from 1
 * @param {number} size - data length in pre page
 */
export const pagination = <T>(
  data: T[] = [],
  page = 1,
  size = 20
): PaginationResult<T> => {
  if (page <= 0) {
    page = 1
  }

  if (size < 0) {
    size = 0
  }

  const from = (page - 1) * size
  const to = page * size
  const items = data.slice(from, to)

  return {
    items,
    page,
    size,
    total: data.length,
    hasNext: to < data.length
  }
}
