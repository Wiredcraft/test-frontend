import { useEffect, useRef, useState } from 'react'
import './ImageContainer.scss'
interface ImageData {
    _id: string
    index: number
    name: string
    src: string
}
interface ImageContainerProps {
    data: ImageData
}

const ImageContainer: React.FC<ImageContainerProps> = (props) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { src, name, _id } = props.data
    const [loaded, setLoaded] = useState(false)
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const [darkMode, setDarkMode] = useState(darkModeQuery.matches)
    darkModeQuery.addEventListener('change', (e) => {
        setDarkMode(darkModeQuery.matches)
    })
    const setOriginalSize = (
        ref: React.MutableRefObject<any>,
        imgSrc: string
    ) => {
        const sizeReg = new RegExp(/\d+/g)
        // because picsum photos return a image with height and width defined in url
        // https://picsum.photos/somewidth/someheight
        const originalSizes = imgSrc.match(sizeReg)
        if (Array.isArray(originalSizes)) {
            const [originalWidth, originalHeight] = originalSizes
            const currentWidth = ref.current.offsetWidth
            const calcHeight =
                (currentWidth / Number(originalWidth)) * Number(originalHeight)
            ref.current.style.height = `${calcHeight}px`
        }
    }
    useEffect(() => {
        setOriginalSize(containerRef, src)
        return () => {}
    }, [containerRef, src])
    return (
        <div
            data-testid="image-container"
            key={`imageContainer${_id}`}
            className={darkMode ? 'image-container dark' : 'image-container'}
            ref={containerRef}
        >
            <img
                key={`image${_id}`}
                className={loaded ? 'image' : 'image loading'}
                src={src}
                alt={name}
                onLoad={() => {
                    setLoaded(true)
                }}
                loading="lazy"
            />
        </div>
    )
}

export { ImageContainer }
export type { ImageData }
