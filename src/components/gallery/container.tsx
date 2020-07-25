/**
 * Gallery Container component
 * Fri Jul 24 23:47:43 2020
 * by xiaoT
 */

import React, { FC, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { updateImages } from '@Store/actions'
import Gallery, { GridRowRect } from './gallery'

const defaultGridRowRect:GridRowRect = {
  gridRowGap: 10,
  gridRowHeight: 50,
  gridColumnWidth: 50
}
const GalleryContainer:FC<{}> = ():JSX.Element => {
  // store dispatch
  const dispatch = useDispatch()
  const images = useSelector(state => state.images)
  // component self state
  const [gridRowRect, setGridRowRect] = useState<GridRowRect>(defaultGridRowRect)
  /**
   * calc grid row size
   * gridRowGap: grid row gap
   * gridRowHeight: grid row height
   * gridColumnWidth: grid column widht
   */
  const calcGridRowRect = ():void => {
    // get gallery grid css
    const gallery = document.querySelector('.gallery')
    const galleryStyle = window.getComputedStyle(gallery)
    const gridRowGap = parseInt(galleryStyle.getPropertyValue('grid-row-gap'), 10)
    const gridRowHeight = parseInt(galleryStyle.getPropertyValue('grid-auto-rows'), 10)
    // image container
    const imageContainer = gallery.querySelectorAll('.image-container')[0]
    const imageWidth = imageContainer.getBoundingClientRect().width
    setGridRowRect({
      gridRowGap,
      gridRowHeight,
      gridColumnWidth: imageWidth
    })
  }
  // get gallery of images
  const getGallery = () => {
    axios.get('/api/gallery')
      .then((res: any) => {
        dispatch(updateImages(res.data))
      })
  }
  useEffect(() => {
    getGallery()
    window.onload = ():void => {
      calcGridRowRect()
    }
  }, [])
  return (
    <Gallery images={images} gridRowRect={gridRowRect} />
  )
}

export default GalleryContainer
