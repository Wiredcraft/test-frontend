import React from 'react'
import { ImageProps } from './interfaces'

const Image: React.FC<ImageProps> = ({ alt, src }) => {
  // TODO: feature - lazy loading
  return <img alt={alt} src={src} />
}

export default Image
