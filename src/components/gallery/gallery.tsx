/**
 * Gallery component
 * Thu Jul 23 10:40:51 2020
 * by xiaoT
 */

import React, { FC } from 'react'

import NavBar from '@Components/navBar/'
import Image from '@Components/image/'

const image = {
  placholeder: 'https://gblobscdn.gitbook.com/spaces%2F-LceGMK-Zxa6_-QeGdy1%2Favatar.png?alt=media',
  src: 'https://picsum.photos/240/379?random=371'
}

const Gallery:FC<{}> = ():JSX.Element => {
  return (
    <div className='gallery'>
      <NavBar onSearch={(e) => {
        e.preventDefault()
      }} />
      <Image {...image} />
    </div>
  )
}

export default Gallery
