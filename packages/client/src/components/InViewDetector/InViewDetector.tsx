import {FC, useCallback, useEffect, useRef} from 'react'

const InViewDetector: FC<{
  onEnter: () => void
  distance?: number
}> = (props) => {
  const {distance = 0, onEnter} = props
  const el = useRef<HTMLDivElement | null>(null)

  const observer = useRef<IntersectionObserver | null>(null)

  const initial = useCallback(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting && onEnter()
      },
      {
        rootMargin: `${distance}px`
      }
    )
  }, [distance, onEnter])

  if (!observer.current) {
    initial()
  }

  useEffect(() => {
    if (el.current && observer.current) {
      observer.current.observe(el.current)
    }

    return () => {
      observer.current?.disconnect()
      observer.current = null
    }
  }, [])

  return <div ref={el} />
}

export default InViewDetector
