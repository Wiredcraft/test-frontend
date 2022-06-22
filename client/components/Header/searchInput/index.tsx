import React, { useState, useEffect } from 'react';
import { filterXss, debounce, getSearchParam } from 'utils';
import SearchIcon from '../../icons/searchIcon';
import { history } from '../../../index';
import './index.less';

export default function SearchInput(): React.ReactElement {
  const [search, setSearch] = useState(getSearchParam(history.location.search));

  useEffect(() => {
    history.listen(() => {
      const searchParam = getSearchParam(history.location.search);
      setSearch(searchParam);
    });
  }, [history.location.search]);

  const onInput = debounce((ev: React.ChangeEvent<HTMLInputElement>) => {
    const val = filterXss(ev.target.value);
    if (val) {
      history.push(`?search=${val}`)
    } else {
      history.push('')
    }
  }, 500);

  return (
    <div className="search">
      <div className="input">
        <span className="icon">
          <SearchIcon />
        </span>
        <input defaultValue={search} onInput={onInput} maxLength={20} aria-label="searchInput" />
      </div>
    </div>
  )
}