/**
 * Gallery component
 * Thu Jul 23 10:40:51 2020
 * by xiaoT
 */

import React, { FC, useEffect, useState } from 'react'

import NavBar from '@Components/navBar/'
import Image from '@Components/image/'

import { calcImageSize } from '@JS/units'

import './gallery.scss'

const imagePlacholeder = 'https://gblobscdn.gitbook.com/spaces%2F-LceGMK-Zxa6_-QeGdy1%2Favatar.png?alt=media'

interface ImageInfoProps {
  _id: string;
  index: number;
  name: string;
  src: string;
}

interface GalleryProps {
  images: ImageInfoProps[]
}

const Gallery:FC<GalleryProps> = ({ images = [] }):JSX.Element => {
  const [gridRowSize, setGridRowSize] = useState<any>({})
  // calc grid row size
  // gap: grid row gap
  // height: grid row height
  const calcGridRowSize = ():void => {
    // get gallery grid css
    const gallery = document.querySelector('.gallery')
    const galleryStyle = window.getComputedStyle(gallery)
    const gridRowGap = parseInt(galleryStyle.getPropertyValue('grid-row-gap'), 10)
    const gridRowHeight = parseInt(galleryStyle.getPropertyValue('grid-auto-rows'), 10)
    // image container
    const imageContainer = gallery.querySelectorAll('.image-container')[0]
    const imageWidth = imageContainer.getBoundingClientRect().width
    setGridRowSize({
      gap: gridRowGap,
      height: gridRowHeight,
      width: imageWidth
    })
  }
  useEffect(() => {
    window.onload = () => {
      calcGridRowSize()
    }
  }, [])
  return (
    <>
      <NavBar onSearch={(e) => {
        e.preventDefault()
      }} />
      <div className='gallery'>
        {
          images.map((item: ImageInfoProps) => {
            const { gap, height, width } = gridRowSize
            // via image.src calc width and height
            const imageSize = calcImageSize(item.src)
            //
            const gridRowEnd = `span ${Math.floor((imageSize.height + gap) * width / imageSize.width / (gap + height))}`
            return <Image style={{ gridRowEnd }} key={item._id} src={item.src} placeholder={imagePlacholeder} />
          })
        }
      </div>
    </>
  )
}

export default Gallery
