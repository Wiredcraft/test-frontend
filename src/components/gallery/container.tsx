/**
 * Gallery Container component
 * Fri Jul 24 23:47:43 2020
 * by xiaoT
 */

import React, { FC, useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import _ from 'lodash'

import Lazyload from '@Components/lazyload'
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
  const getGallery = ():void => {
    axios.get('/api/gallery')
      .then((res: any) => {
        dispatch(updateImages(res.data))
      })
  }
  // throttle calcGridRowRect
  const throttleCalcGridRowRect = useCallback(_.throttle(():void => {
    calcGridRowRect()
  }, 500), [])
  useEffect(() => {
    getGallery()
    /**
     * calc grid info
     * reset image grid-row-end
     */
    window.addEventListener('load', () => {
      calcGridRowRect()
    }, false)
    /**
     * window resize reset image grid-row-end
     */
    window.addEventListener('resize', () => {
      throttleCalcGridRowRect()
    }, false)
  }, [])
  return (
    <Gallery images={images} gridRowRect={gridRowRect} />
  )
}

export default Lazyload()(GalleryContainer)
