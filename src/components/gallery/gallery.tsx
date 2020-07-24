/**
 * Gallery component
 * Thu Jul 23 10:40:51 2020
 * by xiaoT
 */

import React, { FC } from 'react'

import NavBar from '@Components/navBar/'
import Image from '@Components/image/'

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

const Gallery:FC<GalleryProps> = ({ images }):JSX.Element => {
  return (
    <div className='gallery'>
      <NavBar onSearch={(e) => {
        e.preventDefault()
      }} />
      {
        images.map((item: ImageInfoProps) => {
          return <Image key={item._id} src={item.src} placeholder={imagePlacholeder} />
        })
      }
    </div>
  )
}

export default Gallery
