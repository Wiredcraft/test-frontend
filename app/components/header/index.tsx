import React, { ChangeEventHandler, KeyboardEventHandler } from 'react';
import './index.scss';
import HomeSvg from '../../images/home.svg';
import NotificationSvg from '../../images/notification.svg';
import UserSVG from '../../images/user.svg';
import SearchSVG from '../../images/search.svg';
import { useAppSelector, useAppDispatch } from '../../models/hooks'
import { selectKeywords, modifyKeywords } from './slice'
import { loadData, onSearch } from '../gallery/slice'

function Header() {
  const keywords = useAppSelector(selectKeywords)
  const dispatch = useAppDispatch();

  const handleKeyUp: KeyboardEventHandler = (event) => {
    // 正常头部各页面通用，需要根据不同页面做不同处理。
    // 通过跳转链接，在当前链接添加参数应该更通用
    if (event.key === 'Enter') {
      dispatch(onSearch(keywords))
      dispatch(loadData())
    }
  }

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => dispatch(modifyKeywords(event.target.value))

  return (
    <header className="app-header">
      <div className="app-header-content">
        <div className="searchbox">
          <span className="search-icon">
            <SearchSVG />
          </span>
          <input
            onChange={onChange}
            onKeyUp={handleKeyUp}
            className="searchbox-input" placeholder='键盘Enter即触发搜索' type="text" />
        </div>
        <ul className="menu">
          <li className="menu-item">
            <a href="/">
              <HomeSvg />
            </a>
          </li>
          <li className="menu-item">
            <a href="/notification">
              <NotificationSvg />
            </a>
          </li>
          <li className="menu-item">
            <a href="/user">
              <UserSVG />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
