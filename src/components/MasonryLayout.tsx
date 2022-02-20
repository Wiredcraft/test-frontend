import React, { useLayoutEffect, useState } from 'react'
import { MasonryLayoutProps } from '../types/masonryLayout'
import './MasonryLayout.scss'
const useWindowSize = () => {
    const [size, setSize] = useState([0, 0])
    useLayoutEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener('resize', updateSize)
        updateSize()
        return () => window.removeEventListener('resize', updateSize)
    }, [])
    return size
}
interface ColumnContainer {
    [key: string]: Array<JSX.Element>
}

const MasonryLayout: React.FC<MasonryLayoutProps> = (props) => {
    const [width] = useWindowSize()
    const [columns, setColumns] = useState(props.columns)
    const [padding, setPadding] = useState(props.padding)
    useLayoutEffect(() => {
        const updateColumn = () => {
            if (width > 900 && 6 >= columns) {
                // only set 6 columns if less than 6 columns is set
                setColumns(6)
                setPadding(props.padding)
            } else if (width > 820) {
                setColumns(5)
                setPadding(props.padding)
            } else if (width > 750) {
                // break point at 750px, set 4 columns and padding 40
                setColumns(4)
                setPadding(40)
            } else if (width >= 500) {
                // break point at 500px
                setColumns(3)
                setPadding(16)
            } else {
                // layout for small screens
                setColumns(2)
                setPadding(16)
            }
        }
        window.addEventListener('resize', updateColumn)
        updateColumn()
        return () => window.removeEventListener('resize', updateColumn)
    }, [columns, props.padding, width])
    let columnContainer: ColumnContainer = {}
    const result: Array<any> = []
    const elementGapStyle: React.CSSProperties = {
        marginBottom: `${props.gap}px`
    }
    const columnGapStyle: React.CSSProperties = {
        marginLeft: `${props.gap}px`
    }
    const baseContainerStyle: React.CSSProperties = {
        padding: `0 ${padding}px`
    }
    // init columns
    for (let i = 0; i < columns; i++) {
        columnContainer[`column${i}`] = []
    }
    for (let i = 0; i < props.children.length; i++) {
        const colIndex = i % columns
        columnContainer[`column${colIndex}`].push(
            <div
                key={`child${i}`}
                className="masonry-element"
                style={elementGapStyle}
            >
                {props.children[i]}
            </div>
        )
    }
    for (let i = 0; i < columns; i++) {
        result.push(
            <div
                className="masonry-column"
                key={`column${i}`}
                style={i > 0 ? columnGapStyle : {}}
            >
                {columnContainer[`column${i}`]}
            </div>
        )
    }
    return (
        <div
            key={'BaseLayout'}
            className="masonry-layout-container"
            style={baseContainerStyle}
        >
            {result}
        </div>
    )
}

MasonryLayout.defaultProps = {
    columns: 6,
    gap: 15,
    padding: 25
}

export default MasonryLayout
