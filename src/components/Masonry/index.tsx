import React from 'react';
import styles from './index.less';

interface Props {
  itemRender: (item: any, index: number) => HTMLElement;
  dataSource: any[];
}

interface State {
  containerHeight: number;
  columns: Column[];
}

interface Column {
  outerHeight: number;
  cells: HTMLDivElement[];
}

export default class Masonry extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      containerHeight: 0,
      columns: [],
    };
  }

  init() {}

  getAllCells = () => {
    const { itemRender, dataSource } = this.props;
    return dataSource.map((item, index) => (
      <div className={styles.cellContainer}>{itemRender(item, index)}</div>
    ));
  };

  render() {
    return <div style={{}}></div>;
  }
}
