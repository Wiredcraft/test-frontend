import React from 'react';
import { connect, CommonState, Dispatch } from 'umi';
import { ReactComponent as SearchIcon } from '@/assets/search.svg';
import { ReactComponent as HomeIcon } from '@/assets/home.svg';
import { ReactComponent as MessageIcon } from '@/assets/message.svg';
import { ReactComponent as PersonalIcon } from '@/assets/personal.svg';
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
        <div className={styles.searchInputContainer}>
          <SearchIcon className={styles.searchIcon} />
          <input
            className={styles.input}
            value={name}
            onChange={this.handleInputChange}
          />
        </div>
        <HomeIcon className={styles.icon} />
        <MessageIcon className={styles.icon} />
        <PersonalIcon className={styles.icon} />
      </div>
    );
  }
}

export default connect(({ common }: { common: CommonState }) => ({
  name: common.name,
}))(Header);
