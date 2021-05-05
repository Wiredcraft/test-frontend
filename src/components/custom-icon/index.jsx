import React from 'react'

import { getCDNImageUrl } from '@/common/utils'

function CustomIcon({ name, size = 24, className = '' }) {
  return (
    <div
      className={`custom-icon ${className}`}
      width={`${size}px`}
      height={`${size}px`}
    >
      <img src={getCDNImageUrl(`icon-${name}.svg`)} alt={`icon-${name}`} />
    </div>
  )
}

export default CustomIcon
