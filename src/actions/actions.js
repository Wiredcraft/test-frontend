export const DO_FILTER = "DO_FILTER"

export function doFilter(filterType, keywords) {
  return {
    type: DO_FILTER,
    filterType,
    keywords
  }
}
