import { useCallback, useEffect, useState, useRef } from 'react'
import { createContainer } from 'unstated-next'

import {
  getColumnCountByDeviceSize,
  calcAverageImgWidth,
  getDeviceSizeByWidth,
  concatImagesByColumn,
} from '@/common/utils'
import { COLUMN_GAP, BASE_API_URL } from '@/common/constants'

function useApp() {
  const defaultPageInfo = { page: 1, pageSize: 20 }
  const [imageList, setImageList] = useState([])
  const [pageInfo, setPageInfo] = useState(defaultPageInfo)
  const [keyword, setKeyword] = useState('')
  const [initialFetch, setInitialFetch] = useState(true)
  const [end, setEnd] = useState(false)
  const containerRef = useRef()
  const imgWidthRef = useRef()
  const columnCountRef = useRef()

  useEffect(() => {
    if (!containerRef.current) return
    function handler() {
      const containerWidth = parseInt(
        getComputedStyle(containerRef.current).width.slice(0, -2)
      )
      columnCountRef.current = getColumnCountByDeviceSize(
        getDeviceSizeByWidth(containerWidth)
      )
      const imgWidth = calcAverageImgWidth(
        containerWidth,
        getColumnCountByDeviceSize(getDeviceSizeByWidth(containerWidth)),
        COLUMN_GAP
      )
      imgWidthRef.current = imgWidth
    }
    handler()
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [])

  const fetchImageList = useCallback(
    (params) => {
      if (!params) params = { ...pageInfo, keyword }
      fetch(`${BASE_API_URL}?${new URLSearchParams(params)}`)
        .then((response) => response.json())
        .then((json) => {
          setImageList((prevImageList) => {
            const newImageList = json.map((i) => {
              let imgWidth = 200
              let imgHeight = 200
              if (i.src) {
                const imgMetaData = i.src.match(/\d+\/\d+/)
                if (imgMetaData) {
                  imgWidth = imgMetaData[0].match(/\d+/)[0]
                  imgHeight = imgMetaData[0].match(/\d+$/)[0]
                }
              }
              return {
                ...i,
                imgWidth,
                imgHeight,
              }
            })
            return params.page === 1
              ? newImageList
              : concatImagesByColumn(
                  prevImageList,
                  newImageList,
                  columnCountRef.current
                )
          })
          if (params.page === 1) setInitialFetch(false)
          if (json.length < params.pageSize) setEnd(true)
        })
        .catch((err) => console.log(err))
    },
    [pageInfo, keyword]
  )

  useEffect(() => {
    fetchImageList({ ...pageInfo, keyword })
  }, [pageInfo, keyword, fetchImageList])

  const onKeywordChange = (e) => {
    setImageList([])
    setInitialFetch(true)
    setPageInfo(defaultPageInfo)
    setEnd(false)
    setKeyword(e.target.value)
  }

  return {
    imageList,
    setImageList,
    fetchImageList,

    pageInfo,
    setPageInfo,

    initialFetch,
    end,
    onKeywordChange,

    imgWidthRef,
    containerRef,
  }
}

export default createContainer(useApp)
