import React from 'react';
import styles from './index.less';

interface Props {
  width: number;
  height: number;
  src: string;
  innerGap: number;
}

interface State {
  loaded: boolean;
}

export default class ImageCard extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loaded: false,
    };
    const img = new Image();
    img.src = props.src;
    img.onload = this.handleOnLoad;
  }

  handleOnLoad = () => {
    this.setState({ loaded: true });
  };

  render() {
    const { src, width, height, innerGap } = this.props;
    const { loaded } = this.state;
    return (
      <div style={{ width: width, height: height }}>
        {loaded ? (
          <img
            className={styles.img}
            src={src}
            style={{ padding: innerGap / 2 }}
          />
        ) : null}
      </div>
    );
  }
}
