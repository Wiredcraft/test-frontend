import React, { useEffect, useRef } from 'react'

import TopBar from './components/top-bar'
import LazyloadImage from './components/lazyload-image'
import Placeholder from './components/placeholder'
import { getHeightByRatio } from './common/utils'
import AppProvder from './providers/app'

import './app.scss'

function App() {
  const {
    imageList,
    end,
    setPageInfo,
    initialFetch,
    imgWidthRef,
    containerRef,
  } = AppProvder.useContainer()
  const loadmoreRef = useRef()

  useEffect(() => {
    if (!loadmoreRef.current) return
    const node = loadmoreRef.current
    const io = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio <= 0 || initialFetch || end) return
      setPageInfo((prevPageInfo) => ({
        ...prevPageInfo,
        page: prevPageInfo.page + 1,
      }))
    })
    io.observe(node)

    return () => {
      io.unobserve(node)
      io.disconnect()
    }
  }, [initialFetch, setPageInfo, end])

  return (
    <div>
      <TopBar />
      <div className="masonry-container" ref={containerRef}>
        {imageList.map((i) => {
          return (
            <LazyloadImage
              key={i._id}
              src={i.src}
              name={i.name}
              placeholder={
                <Placeholder
                  width={imgWidthRef.current}
                  height={getHeightByRatio(
                    imgWidthRef.current,
                    i.imgWidth / i.imgHeight
                  )}
                />
              }
            />
          )
        })}
        <div className="masonry-container__flag" ref={loadmoreRef} />
      </div>
    </div>
  )
}

export default App
