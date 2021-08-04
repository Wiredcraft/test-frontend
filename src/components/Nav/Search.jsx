import React, { useCallback, useState } from 'react';
import { useContainer } from 'unstated-next';
import styles from './Search.module.less';
import ImageContainer from '../../store/ImageContainer';
import { debounce } from '../../common/uitils';


function Search () {
  const { doSearch } = useContainer(ImageContainer);
  const onInputChange = useCallback(debounce(e => {
    const inputKey = e.target.value;

    doSearch(inputKey);
  }, 400), [])


  return (
    <div className={styles.search}>
      <span className="iconfont icon-sousuo"></span>
      <input className={styles.input} onChange={onInputChange}/>
    </div>
  );
}


export default Search;