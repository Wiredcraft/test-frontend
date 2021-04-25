import {rgba} from 'polished'
import {FC, memo, useMemo} from 'react'
import styled from 'styled-components'
import {useImageLoader} from '../hooks/useImageLoader'
import {pxToGridRowSpan} from '../utils/grid'
import {clamp} from '../utils/lang'
import {prop} from '../utils/styled-helpers'
import {MasonryLayoutConfig, PhotoData} from './MasonryLayout'

type MasonryLayoutCellProps = Pick<
  MasonryLayoutConfig,
  'rowHeightBase' | 'gap' | 'cellMinHeight' | 'cellMaxHeight'
> & {
  data: PhotoData
}

const MasonryLayoutCell: FC<MasonryLayoutCellProps> = memo((props) => {
  const {data} = props
  const [imageStatus, imageSize] = useImageLoader(data.src)

  const span = useMemo(() => {
    const height =
      imageStatus === 'success' && imageSize
        ? imageSize.height
        : props.cellMinHeight
    return pxToGridRowSpan(
      clamp(height, props.cellMinHeight, props.cellMaxHeight),
      props.rowHeightBase,
      props.gap
    )
  }, [
    imageSize,
    imageStatus,
    props.cellMaxHeight,
    props.cellMinHeight,
    props.gap,
    props.rowHeightBase
  ])

  return (
    <MasonryLayoutCellWrapper span={span}>
      <Image data={data} />
    </MasonryLayoutCellWrapper>
  )
})

const MasonryLayoutCellWrapper = styled.figure<{span: number}>`
  grid-row-end: span ${prop('span')};
  margin: 0;
  border-radius: 10px;
  overflow: hidden;
  background-color: #f1f1f1;
  box-shadow: 0 2px 4px ${rgba('#000', 0.1)};
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 650ms ease;
    transition-delay: 80ms;
    &:hover {
      transform: scale(1.2);
    }
  }
`

// eslint-disable-next-line react/display-name
const Image: FC<{data: PhotoData}> = memo(({data}) => (
  <img src={data.src} alt={data.name} />
))

MasonryLayoutCell.displayName = 'MasonryLayoutCell'

export default MasonryLayoutCell
