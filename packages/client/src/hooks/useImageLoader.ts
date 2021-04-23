import {useEffect, useState} from 'react'

type Status = 'loading' | 'success' | 'failed'

type Size = {
  width: number
  height: number
}

export const useImageLoader = (src: string): [Status, Size?] => {
  const [status, setStatus] = useState<Status>('loading')
  const [size, setSize] = useState<Size>()

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      setStatus('success')
      setSize({
        width: image.width,
        height: image.height
      })
    }
    image.onerror = () => {
      setStatus('failed')
    }
  }, [src])

  return [status, size]
}
