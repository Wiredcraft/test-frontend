import React from 'react';
import { connect, CommonState, Dispatch } from 'umi';

import styles from './index.less';

interface Props {
  name: string;
  dispatch: Dispatch;
}

class Header extends React.PureComponent<Props> {
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.props.dispatch({
      type: 'common/setName',
      payload: value,
    });
  };

  render() {
    const { name } = this.props;
    return (
      <div className={styles.container}>
        <input value={name} onChange={this.handleInputChange} />
      </div>
    );
  }
}

export default connect(({ common }: { common: CommonState }) => ({
  name: common.name,
}))(Header);
