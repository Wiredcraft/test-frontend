/**
 * Image component test
 * Fri Jul 24 15:18:27 2020
 * by xiaoT
 */
import React, { FC } from 'react'
import ReactDom from 'react-dom'
import { shallow, mount } from 'enzyme'

import Image from './'

const testPorps = {
  placeholder: 'https://gblobscdn.gitbook.com/spaces%2F-LceGMK-Zxa6_-QeGdy1%2Favatar.png?alt=media',
  src: 'https://picsum.photos/240/379?random=371',
  alt: 'image name',
  style: {
    backgroudColor: '#ccc'
  }
}

describe('Image Test', () => {
  let imageComponent: any
  let imageEle: any

  beforeEach(() => {
    imageComponent  = shallow(<Image {...testPorps} />)
    imageEle = imageComponent.find('img')
  })
  afterEach(() => {
    imageComponent.unmount()
    imageEle = null
  })
  // should be match the snapshot
  it('should be match the snapshot', () => {
    expect(imageComponent.html()).toMatchSnapshot()
  })
  // Image should be have an image element
  it('should be have an image element', () => {
    expect(imageEle.length).toEqual(1)
  })
  // Image should be have a src attribute
  it('should be have a src attribute', () => {
    const src = imageEle.prop('src')
    expect(src).toEqual(testPorps.src)
  })
  // Image alt attribute should be equal testPorps.alt
  it('Image alt attribute should be equal testPorps.alt', () => {
    const alt = imageEle.prop('alt')
    expect(alt).toEqual(testPorps.alt)
  })
  // image container style attribute should be equal testPorps.style
  it('Image style attribute should be equal testPorps.style', () => {
    const containerStyle = imageComponent.prop('style')
    expect(containerStyle).toHaveProperty('backgroudColor', '#ccc')
  })
  // Image should be have a data-lazy attribute
  it('should be have a data-lazy attribute', () => {
    const dataLazy = imageEle.prop('data-lazy')
    expect(dataLazy).toEqual(testPorps.placeholder)
  })
})