import React, { PureComponent } from 'react';

const defaultProps = {
  requestTriggerHeight: 100,
};

interface Props {
  container: HTMLElement;
  onRequest: () => void;
  children: any;
  requesting: boolean;
  allLoaded: boolean;
  requestTriggerHeight?: number;
}

type FinalProps = Props & typeof defaultProps;

const PScroll = class extends PureComponent<FinalProps> {
  computing: boolean;
  scrollTop: number;
  listenerRemoved: boolean;

  constructor(props: FinalProps) {
    super(props);
    this.computing = false;
    this.scrollTop = 0;
    this.listenerRemoved = false;
  }

  static defaultProps = defaultProps;

  componentDidMount() {
    const { allLoaded } = this.props;
    if (!allLoaded) {
      const { container } = this.props;
      container.addEventListener('scroll', this.scroll);
    }
  }

  componentDidUpdate() {
    const { allLoaded } = this.props;
    if (allLoaded) {
      this.removeScroll();
    }
  }

  componentWillUnmount() {
    this.removeScroll();
  }

  scroll = () => {
    const { requesting, allLoaded } = this.props;
    if (requesting) {
      return;
    }
    if (allLoaded) {
      return;
    }
    const { container } = this.props;
    this.scrollTop = container.scrollTop;
    if (!this.computing) {
      window.requestAnimationFrame(this.update);
    }
    this.computing = true;
  };

  update = () => {
    const { onRequest, requestTriggerHeight, container } = this.props;
    if (
      requestTriggerHeight + this.scrollTop + container.clientHeight >=
      container.scrollHeight
    ) {
      onRequest();
    }
    this.computing = false;
  };

  removeScroll = () => {
    if (this.listenerRemoved) {
      return;
    }
    const { container } = this.props;
    container.removeEventListener('scroll', this.scroll);
    this.listenerRemoved = true;
  };

  render() {
    const { children } = this.props;
    return children;
  }
} as React.ComponentClass<Props>;

export default PScroll;
