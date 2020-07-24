/**
 * Gallery Container component
 * Fri Jul 24 23:47:43 2020
 * by xiaoT
 */

import React, { FC, useState, useEffect } from 'react'
import axios from 'axios'

import Gallery from './gallery'

const GalleryContainer:FC<{}> = ():JSX.Element => {
  let [images, setImages] = useState<[]>([])

  // get gallery of images
  const getGallery = () => {
    axios.get('/api/gallery')
      .then((res: any) => {
        setImages(res.data)
      })
  }
  useEffect(() => {
    getGallery()
  }, [])
  return (
    <Gallery images={images} />
  )
}

export default GalleryContainer
