import React, { useState } from 'react'

import CustomIcon from '@/components/custom-icon'
import { debounce } from '@/common/utils'

import './index.scss'

function SearchInput({ onChange }) {
  const [focused, setFocused] = useState(false)

  const onFocus = () => setFocused(true)

  const onBlur = () => setFocused(false)

  return (
    <div className={`search-input ${focused ? 'search-input__focused' : ''}`}>
      <CustomIcon className="search-input__prefix" name="search" size={18} />
      <input
        className="search-input__input"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={debounce(onChange, 200, { trailing: true })}
      />
    </div>
  )
}

export default SearchInput
