/**
 * img lazyload component
 * Mon Jul 27 01:40:01 2020
 * by xiaoT
 */

import React, { FC, useEffect } from 'react'

let timer = null
let observer = null
let mutationConfig = { attributes: true, childList: true, subtree: true }
let targetNode

/**
 * determine whether element is visible
 * @param  {HTMLImageElement}  ele
 * @return {Boolean}
 */
function isView (ele: HTMLImageElement) {
  const { innerHeight, innerWidth } = window
  const ract = ele.getBoundingClientRect()
  const { top, left } = ract
  return left < (innerWidth * 2) && top > (0 - 200) && top < innerHeight
}
/**
 * lazyload handle
 * @return {undefined}
 */
function lazyload ():void {
  if (timer) {
    clearTimeout(timer)
  }
  // throttle
  timer = setTimeout(() => {
    let imgs = document.querySelectorAll('[data-lazy]') || []
    Array.from(imgs, (item: HTMLImageElement) => {
      let lazyURL = item.dataset.lazy
      let tagName = item.tagName.toLowerCase()
      let visible = isView(item)
      if (visible && tagName === 'img' && lazyURL !== item.src) {
        item.src = lazyURL
        item.removeAttribute('data-lazy')
      }
    })
  }, 150)
}

interface OptionsProps {
  target?: string;
}

const LazyloadHOC = (options: OptionsProps = {}) => {
  return (OriginComponent):FC => {
    const WrappedComponent:FC<{}> = ():JSX.Element => {
      useEffect(() => {
        let { target } = options
        if (!target) {
          targetNode = document.body
        } else {
          targetNode = document.getElementById(target)
        }
        // page attribute changed invoke lazyload
        observer = new window.MutationObserver(lazyload)
        observer.observe(targetNode, mutationConfig)
        // page scroll invoke lazyload
        window.addEventListener('scroll', lazyload, false)
        // component unmount clear timer
        // remove linstener
        return ():void => {
          if (timer) {
            clearTimeout(timer)
          }
          window.removeEventListener('scroll', lazyload)
        }
      }, [])
      return (
        <OriginComponent />
      )
    }
    return WrappedComponent
  }
}

export default LazyloadHOC
