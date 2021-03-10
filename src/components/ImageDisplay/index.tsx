import React from 'react'
import list from '../../list.json'
import Image from './components/Image'
import styled from 'styled-components'

const imgList = list.slice(0, 10)
const ImageDisplay = () => {
  console.log(imgList)
  return (
    <StyledUl>
      {imgList.map(({ _id, name, src }) => (
        <li key={_id}>
          <Image alt={name} src={src} />
        </li>
      ))}
    </StyledUl>
  )
}

export default ImageDisplay

const StyledUl = styled.ul`
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  li {
    margin: 10px;
    img {
      border-radius: var(--border-rounded);
      box-shadow: 0 0 5px var(--shadow-color);
    }
  }
`
