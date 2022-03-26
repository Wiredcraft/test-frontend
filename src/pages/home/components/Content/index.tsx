import React from 'react';
import { connect, CommonState } from 'umi';
import * as service from '@/service';
import InfiniteScroll from '@/components/InfiniteScroll';

import styles from './index.less';
import ImageCard from '@/components/ImageCard';
import Masonry from '@/components/Masonry';

const GAP = 14;
const COLUMN_WIDTH = 200;

interface State {
  list: ListItem[];
  limit: number;
  total: number;
  offset: number;
  allLoaded: boolean;
  requesting: boolean;
}

export interface ListItem {
  id: string;
  name: string;
  src: string;
  width: number;
  height: number;
}

interface Props {
  name: string;
}

// duration the input stopped (ms)
const INPUT_GAP = 500;

class Content extends React.PureComponent<Props, State> {
  searchingName: string;
  searchTimer: ReturnType<typeof setTimeout> | null;
  scrollContainer: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.state = {
      list: [],
      total: 0,
      limit: 20,
      offset: 0,
      allLoaded: false,
      requesting: false,
    };
    this.searchingName = '';
    this.searchTimer = null;
    this.scrollContainer = React.createRef();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      this.handleNameChange();
    }
  }

  componentDidMount() {
    this.triggerSearch();
  }

  handleNameChange = () => {
    // clear the list when name changed
    this.setState({
      list: [],
      total: 0,
      offset: 0,
      allLoaded: false,
      requesting: true,
    });

    // trigger search after input stopped
    if (this.searchTimer) {
      clearTimeout(this.searchTimer);
    }
    this.searchTimer = setTimeout(this.triggerSearch, INPUT_GAP);
  };

  triggerSearch = async () => {
    try {
      this.searchingName = this.props.name;
      const { limit, offset } = this.state;

      this.setState({
        requesting: true,
      });
      const res: any = await service.getList({
        limit,
        offset,
        name: this.searchingName,
      });
      if (this.searchingName !== this.props.name) {
        // make sure the results match current name
        return;
      }
      const { list, total } = res;

      const realList = list.map((item: any) => {
        const { src, name, _id } = item;
        // the width and height are defined in the src
        const urlWithoutQuery = src.split('?')[0];
        const result = urlWithoutQuery.match(/\d+/g);
        const imgWidth = parseInt(result?.[0] || '0');
        const imgHeight = parseInt(result?.[1] || '0');
        const cellWidth = COLUMN_WIDTH + GAP;
        const cellHeight = (imgHeight / imgWidth) * COLUMN_WIDTH + GAP;
        return {
          src,
          name,
          id: _id,
          width: cellWidth,
          height: cellHeight,
        };
      });

      const newOffset = offset + limit;
      const allLoaded = offset + limit >= total;

      this.setState({
        list: [...this.state.list, ...realList],
        offset: newOffset,
        total,
        requesting: false,
        allLoaded,
      });
    } catch (err) {
      console.log(err);
    }
  };

  renderList = () => {
    const { list, requesting } = this.state;
    const columnWidth = 214;
    const dataSource = list.map((item) => {
      const ratio = item.height / item.width;
      const height = columnWidth * ratio;
      return {
        ...item,
        width: columnWidth,
        height,
      };
    });
    if (dataSource.length) {
      return (
        <Masonry
          dataSource={dataSource}
          innerGap={14}
          columnWidth={columnWidth}
        />
      );
    }
    if (requesting) {
      return <p className={styles.tips}>Looking for results...</p>;
    }
    return <p className={styles.tips}>Nothing found here.</p>;
  };

  render() {
    const { allLoaded, requesting } = this.state;
    return (
      <div ref={this.scrollContainer} className={styles.container}>
        {this.scrollContainer.current ? (
          <InfiniteScroll
            container={this.scrollContainer.current}
            onRequest={this.triggerSearch}
            allLoaded={allLoaded}
            requesting={requesting}
          >
            {this.renderList()}
          </InfiniteScroll>
        ) : null}
      </div>
    );
  }
}

export default connect(({ common }: { common: CommonState }) => ({
  name: common.name,
}))(Content);
