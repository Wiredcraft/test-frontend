import { useCallback, useEffect, useState } from 'react'
import { createContainer } from 'unstated-next'

import { BASE_API_URL } from '@/common/constants'

function useApp() {
  const defaultPageInfo = { page: 1, pageSize: 20 }
  const [imageList, setImageList] = useState([])
  const [pageInfo, setPageInfo] = useState(defaultPageInfo)
  const [keyword, setKeyword] = useState('')
  const [initialFetch, setInitialFetch] = useState(true)
  const [end, setEnd] = useState(false)

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
              : prevImageList.concat(newImageList)
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
  }
}

export default createContainer(useApp)
