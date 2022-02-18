import { useState } from 'react'

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
    const { src, name } = props.data
    const [loaded, setLoaded] = useState(false)
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        borderRadius: '13px',
        overflow: 'hidden'
    }
    const imageStyle: React.CSSProperties = {
        width: '100%',
        height: 'auto'
    }
    return (
        <div style={containerStyle}>
            {loaded ? null : (
                <img
                    style={imageStyle}
                    src="/images/loading.gif"
                    alt="loading"
                />
            )}
            <img
                style={loaded ? imageStyle : { ...imageStyle, display: 'none' }}
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
