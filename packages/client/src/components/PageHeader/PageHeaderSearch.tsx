import {ChangeEvent, FC} from 'react'
import styled from 'styled-components'

const PageHeaderSearch: FC<{onChange?: (value: string) => void}> = (props) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange && props.onChange(e.target.value.trim())
  }

  return (
    <SearchWrapper as={'form'}>
      <Icon />
      <Input type='text' onChange={onChange} />
    </SearchWrapper>
  )
}

const SearchWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  width: 200px;
  height: 35px;
  padding: 0 12px;
  box-sizing: border-box;
  background-color: #eee;
  border-radius: 35px;
`

const Icon = styled.i`
  margin-right: 8px;
  width: 24px;
  height: 24px;
  background-color: #ccc;
  mask-image: url(${require('../../assets/search.svg').default});
  mask-size: contain;
`

const Input = styled.input`
  flex: 1;
  min-width: 0;
  height: 100%;
  padding: 0;
  border: none;
  font-size: 16px;
  background-color: transparent;
  outline: none;
  -webkit-appearance: none;
`

export default PageHeaderSearch
