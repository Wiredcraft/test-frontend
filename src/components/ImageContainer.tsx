import { useState } from 'react'
import './ImageContainer.less'
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
    return (
        <div key={`imageContainer${_id}`} className="image-container">
            {loaded ? null : (
                <img
                    key={`imageLoading${_id}`}
                    src="/images/loading.gif"
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
            />
        </div>
    )
}

export { ImageContainer }
export type { ImageData }
