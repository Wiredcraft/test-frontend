import React from 'react';
import Header from './components/Header';
import Content from './components/Content';

import styles from './index.less';

export default class Index extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <Content />
      </div>
    );
  }
}
