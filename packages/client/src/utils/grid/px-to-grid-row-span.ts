/**
 * Convert pixel units to span units in the grid.
 *
 * Will Round down span value to int when pixel cannot be aligned
 *
 * @param height
 * @param rowHeight
 * @param gap
 *
 * =========rowHeight
 * ---------gap
 * =========rowHeight
 * ---------gap
 * =========rowHeight
 */
export const pxToGridRowSpan = (height = 0, rowHeight = 0, gap = 0): number => {
  const value = Math.floor(height / (rowHeight + gap))
  return isFinite(value) ? value : 0
}
