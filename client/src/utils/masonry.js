import _ from 'lodash';

/**
 * - For each element, push it to the column that has minimum height
 * - Repeat that step
 */
export const buildColumnsWithMinimumHeightDiff = (
  items,
  columnCount
) => {
  const initialColumns = _.range(0, columnCount).map(index => ({
    colIndex: index,
    height: 0,
    elements: []
  }));

  return _.reduce(
    items,
    (columns, nextItem) => {
      // find col that has minimum height
      const minCol = _.minBy(columns, 'height');
      const colIndex = minCol.colIndex;
      // push element to col
      columns[colIndex].elements.push(nextItem);
      // compute the new height after adding element
      columns[colIndex].height = columns[colIndex].height + nextItem.height;
      return columns;
    },
    initialColumns
  );
};

/**
 * Compute element.top + element.left basing on built columns
 */
export const computeElementPositions = (
  columns,
  config,
) => {
  const columnWidth = config.columnWidth;
  const finalResult = [];

  _.map(columns, column => {
    const colIndex = column.colIndex;
    // left position
    const left = colIndex * columnWidth;
    let height = 0;

    _.map(column.elements, (element, index) => {
      // compute top + left
      finalResult.push({ ...element, top: height, left });

      // compute new top
      height = height + element.height;
    });
  });

  return _.orderBy(finalResult, 'index');
};