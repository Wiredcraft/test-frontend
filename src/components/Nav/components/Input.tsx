import React from 'react'
import { BsSearch } from 'react-icons/bs'
import styled from 'styled-components'
import useSearchModel from '../../../models/search'

const Input: React.FC = () => {
  const { searchValue, setSearchValue } = useSearchModel()
  return (
    <>
      <StyledBsSearch />
      <StyledInput
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value)
        }}
        placeholder='Search'
      />
    </>
  )
}

export default Input

const StyledBsSearch = styled(BsSearch)`
  position: relative;
  transform: translateX(70px) scale(0.8);
`

const StyledInput = styled.input`
  padding: 3px 15px 3px 40px;
  margin: 0 30px;
  height: 24px;
  width: 130px;
  border: none;
  background-color: var(--darker-bg);
  border-radius: 24px;
  outline: none;
`
