/**
 * Gallery component
 * Thu Jul 23 10:40:51 2020
 * by xiaoT
 */

import React, { FC } from 'react'

import NavBar from '@Components/navBar/'

const Gallery:FC<{}> = ():JSX.Element => {
  return (
    <div className='gallery'>
      <NavBar onSearch={(e) => {
        e.preventDefault()
      }} />
    </div>
  )
}

export default Gallery
