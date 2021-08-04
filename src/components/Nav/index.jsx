import React from 'react';
import styles from './index.module.less';
import Search from './Search';

function Nav() {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.nav}>
        <Search />
        <div className="iconfont icon-fangzi"></div>
        <div className="iconfont icon-xiaoxi"></div>
        <div className="iconfont icon-touxiang"></div>
      </div>
    </div>
  )
}

export default Nav;