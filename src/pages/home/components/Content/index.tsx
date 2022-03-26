import React from 'react';
import { connect, CommonState } from 'umi';
import * as service from '@/service';
import InfiniteScroll from '@/components/InfiniteScroll';

import styles from './index.less';

interface State {
  list: ListItem[];
  limit: number;
  total: number;
  offset: number;
  allLoaded: boolean;
  requesting: boolean;
}

interface ListItem {
  id: string;
  name: string;
  src: string;
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
      allLoaded: false,
    });

    // trigger search after input stopped
    if (this.searchTimer) {
      clearTimeout(this.searchTimer);
    }
    this.searchTimer = setTimeout(this.triggerSearch, INPUT_GAP);
  };

  triggerSearch = () => {
    this.searchingName = this.props.name;
    const { limit, offset } = this.state;

    this.setState({
      requesting: true,
    });
    service
      .getList({
        limit,
        offset,
        name: this.searchingName,
      })
      .then((res: any) => {
        if (this.searchingName !== this.props.name) {
          // make sure the results match current name
          return;
        }
        const { list, total } = res;
        const newOffset = offset + limit;
        const allLoaded = offset + limit >= total;
        this.setState({
          list: [...this.state.list, ...list],
          offset: newOffset,
          total,
          requesting: false,
          allLoaded,
        });
      })
      .catch();
  };

  renderList = () => {
    const { list } = this.state;
    return list.map((item) => (
      <div>
        <img key={item.id} src={item.src} />
      </div>
    ));
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
