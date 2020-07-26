/**
 * Gallery component
 * Thu Jul 23 10:40:51 2020
 * by xiaoT
 */

import React, { FC } from 'react'

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

export interface GridRowRect {
  gridRowGap: number;
  gridRowHeight: number;
  gridColumnWidth: number;
}

interface GalleryProps {
  images: ImageInfoProps[];
  gridRowRect: GridRowRect;
}

const Gallery:FC<GalleryProps> = ({ images = [], gridRowRect }):JSX.Element => {
  return (
    <>
      <NavBar onSearch={(e) => {
        e.preventDefault()
      }} />
      <div className='gallery'>
        {
          images.map((item: ImageInfoProps) => {
            const { gridRowGap, gridRowHeight, gridColumnWidth } = gridRowRect
            // via image.src calc width and height
            const imageSize = calcImageSize(item.src)
            // via image size calc grid row end
            const gridRowEnd = `span ${Math.floor((imageSize.height + gridRowGap) * gridColumnWidth / imageSize.width / (gridRowGap + gridRowHeight))}`
            return <Image style={{ gridRowEnd }} key={item._id} src={item.src} alt={item.name} placeholder={imagePlacholeder} />
          })
        }
      </div>
    </>
  )
}

export default Gallery
