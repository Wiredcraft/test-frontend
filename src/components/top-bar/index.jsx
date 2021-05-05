import React from 'react'

import CustomIcon from '@/components/custom-icon'
import SearchInput from '@/components/search-input'
import AppProvider from '@/providers/app'

import './index.scss'

function TopBar() {
  const { onKeywordChange } = AppProvider.useContainer()

  return (
    <div className="top-bar">
      <div className="top-bar__inner">
        <SearchInput onChange={onKeywordChange} />
        <CustomIcon name="home" className="top-bar__icon" />
        <CustomIcon name="bell" className="top-bar__icon" />
        <CustomIcon name="user" className="top-bar__icon" />
      </div>
    </div>
  )
}

export default TopBar
