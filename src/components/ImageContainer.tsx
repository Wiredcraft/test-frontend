import { useState } from 'react'
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
    const { src, name, _id } = props.data
    const [loaded, setLoaded] = useState(false)
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const [darkMode, setDarkMode] = useState(darkModeQuery.matches)
    darkModeQuery.addEventListener('change', (e) => {
        setDarkMode(darkModeQuery.matches)
    })

    return (
        <div
            data-testid="image-container"
            key={`imageContainer${_id}`}
            className="image-container"
        >
            {loaded ? null : (
                <img
                    key={`imageLoading${_id}`}
                    src={
                        darkMode
                            ? '/images/loading-dark.gif'
                            : '/images/loading.gif'
                    }
                    alt="loading"
                    className="image"
                />
            )}
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
