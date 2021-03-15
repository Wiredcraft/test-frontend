import React, { useEffect, useLayoutEffect, useState } from 'react'
// import Masonry from 'react-masonry-css'
import styled from 'styled-components'
import getImgList from '../../api/getImgList'
import { ImgList } from '../../api/interfaces'
import useSearchModel from '../../models/search'
import Image from './components/Image'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const ImageDisplay = () => {
  const [imgList, setImgList] = useState<ImgList>([])
  const { searchValue } = useSearchModel()
  const [filteredList, setFilteredList] = useState(imgList)

  useLayoutEffect(() => {
    getImgList().then(setImgList)
  }, [])

  useEffect(() => {
    const handler = setTimeout(() => {
      setFilteredList(
        imgList.filter(({ name }) =>
          searchValue !== '' ? name.includes(searchValue) : true,
        ),
      )
    }, 500)
    return () => {
      clearTimeout(handler)
    }
  }, [searchValue, imgList])

  return (
    <ImageContainer
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4, 1500: 5 }}
    >
      <StyledMasonry>
        {filteredList.map(({ _id, name, src }) => (
          <Image key={_id} alt={name} src={src} />
        ))}
      </StyledMasonry>
    </ImageContainer>
  )
}

export default ImageDisplay

const ImageContainer = styled(ResponsiveMasonry)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  max-width: 1500px;
`

const StyledMasonry = styled(Masonry)`
  display: flex;
  width: auto;
  padding-left: 16px; /* gutter size */
  background-clip: padding-box;
  > div > div {
    padding: 16px;
    img {
      width: 100%;
      border-radius: var(--border-rounded);
      box-shadow: 0 0 8px var(--shadow-color);
      transition: box-shadow 0.2s ease-in-out;
      :hover {
        cursor: pointer;
        box-shadow: none;
      }
    }
  }
`
