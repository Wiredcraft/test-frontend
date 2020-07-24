/**
 * NavBar component
 * Thu Jul 23 10:37:31 2020
 * by xiaoT
 */

import React, { FC, useState, FormEvent } from 'react'

import './navBar.scss'

interface NavbarProps {
  onSearch: (e: FormEvent) => void;
}

const NavBar: FC<NavbarProps> = ({ onSearch }): JSX.Element => {
  const [searchKey, setSearchKey] = useState<string>('')

  function handleInputChange (e: FormEvent<HTMLInputElement>) {
    setSearchKey(e.currentTarget.value)
  }
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
