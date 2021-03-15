import { useState } from 'react'
import { createModel } from 'hox'

const useSearch = () => {
  const [searchValue, setSearchValue] = useState('')

  return {
    searchValue,
    setSearchValue,
  }
}

export default createModel(useSearch)
