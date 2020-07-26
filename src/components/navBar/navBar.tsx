/**
 * NavBar component
 * Thu Jul 23 10:37:31 2020
 * by xiaoT
 */

import React, { FC, useState, useCallback, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import _ from 'lodash'

import { filterImages } from '@Store/actions'
import './navBar.scss'

interface NavbarProps {
  onSearch: (e: FormEvent) => void;
}

const NavBar: FC<NavbarProps> = ({ onSearch }): JSX.Element => {
  const [searchKey, setSearchKey] = useState<string>('')
  const dispatch = useDispatch()

  function handleInputChange (e: FormEvent<HTMLInputElement>) {
    setSearchKey(e.currentTarget.value)
    throttleChange(e.currentTarget.value)
  }
  // throttle input change
  const throttleChange = useCallback(_.throttle((filterKey) => {
    dispatch(filterImages(filterKey))
  }, 500), [])
  return (
    <div className='nav-bar'>
      <div
        data-justify='flex-end'
        data-align='center'
        className='nav-bar-inner flex'>
        <form onSubmit={onSearch}>
          <label
            data-align='center'
            className='form-item flex'>
            <i className='icon icon-search' />
            <input
              onChange={handleInputChange}
              value={searchKey}
              name='searchKey'
              className='flex-1'
              placeholder='请输入关键字'
              type='text' />
          </label>
        </form>
        <i className='icon icon-home' />
        <i className='icon icon-bell' />
        <i className='icon icon-avatar' />
      </div>
    </div>
  )
}

export default NavBar
