import { memo, useMemo } from 'react'
import { placeholder } from '../icons'
import './index.css'

export const LazyLoadImg = memo(({ src }: { src: string, className?: string }) => {
    // match size from image info
    const [, h] = useMemo(() => {
        const [width, height] = src.match(new RegExp('/\\d+', 'g')) || []
        const h = Number(height.slice(1))
        const w = Number(width.slice(1))
        return [, h * 200 / w]
    }, [src])
    
    return <>
        <img className="lazy masonry-item" src={placeholder} data-src={src} height={h} />
    </>
})