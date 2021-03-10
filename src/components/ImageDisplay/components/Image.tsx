import React from 'react'
import { ImageProps } from './interfaces'

const Image: React.FC<ImageProps> = (props) => {
  return <img {...props} />
}

export default Image
