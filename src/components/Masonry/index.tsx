import { ListItem } from '@/pages/home/components/Content';
import React from 'react';
import ImageCard from '@/components/ImageCard';
import styles from './index.less';

interface Props {
  dataSource: ListItem[];
  columnWidth: number;
  innerGap: number;
}

interface State {
  containerHeight: number;
  paintDataSource: Cell[];
  columnNumber: number;
}

interface Cell {
  width: number;
  height: number;
  order: number;
  key: string;
  src: string;
  basisHeight: number | null;
}

interface Column {
  outerHeight: number;
  cellList: Cell[];
}

export default class Masonry extends React.PureComponent<Props, State> {
  container: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.state = {
      containerHeight: 0,
      paintDataSource: [],
      columnNumber: 0,
    };
    this.container = React.createRef();
    window.addEventListener('resize', () => {
      this.handleResize();
    });
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.dataSource.length !== this.props.dataSource.length) {
      this.handleResize(true);
    }
  }

  componentDidMount() {
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => {
      this.handleResize();
    });
  }

  handleResize = (enforce = false) => {
    const { columnWidth, dataSource } = this.props;
    const { columnNumber } = this.state;
    const numOfColumns = Math.floor(
      (this.container.current?.offsetWidth || 0) / columnWidth,
    );
    if (enforce || (numOfColumns !== columnNumber && dataSource.length)) {
      const newColumns = new Array(numOfColumns).fill(0).map(() => ({
        cellList: [] as Cell[],
        outerHeight: 0,
      }));
      const newPaintDataSource: Cell[] = [];

      // keep pushing cell to the shortest column
      for (const item of dataSource) {
        const { height, width, id, src } = item;
        const minHeight = Math.min(...newColumns.map((v) => v.outerHeight));
        const column = newColumns.find((v) => v.outerHeight === minHeight);
        if (column) {
          const cell = {
            height,
            width,
            key: id,
            src,
            order: 0,
            basisHeight: null,
          };
          column.cellList.push(cell);
          column.outerHeight += item.height;
          newPaintDataSource.push(cell);
        }
      }

      // the longest column's height will be the height of container
      const containerHeight =
        Math.max(...newColumns.map((v) => v.outerHeight)) + 1;

      // set flex order
      let order = 0;
      for (const column of newColumns) {
        for (const cell of column.cellList) {
          cell.order = order++;
        }
        // the last cell of the column need to fill the empty space between the column and the container
        const finalCell = column.cellList[column.cellList.length - 1];
        finalCell.basisHeight =
          finalCell.height + (containerHeight - column.outerHeight - 1);
      }

      this.setState({
        containerHeight,
        columnNumber: newColumns.length,
        paintDataSource: newPaintDataSource,
      });
    }
  };

  renderCell = (cell: Cell) => {
    const { width, height, order, key, src, basisHeight } = cell;
    const { innerGap } = this.props;
    return (
      <div
        key={key}
        style={{
          width,
          height,
          flexBasis: basisHeight || 0,
          order,
        }}
        className={styles.cellContainer}
      >
        <ImageCard
          innerGap={innerGap}
          width={width}
          height={height}
          src={src}
        />
      </div>
    );
  };

  render() {
    const { paintDataSource, containerHeight } = this.state;
    return (
      <div
        className={styles.container}
        style={{ height: containerHeight }}
        ref={this.container}
      >
        {paintDataSource.map(this.renderCell)}
      </div>
    );
  }
}
