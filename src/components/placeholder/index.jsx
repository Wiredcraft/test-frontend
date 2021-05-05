import React from 'react'

import './index.scss'

function Placeholder({ width = '100%', height = '100%' }) {
  return (
    <div className="placeholder" style={{ width, height }} />
  )
}

export default Placeholder