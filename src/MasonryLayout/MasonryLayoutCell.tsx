import {size} from 'polished'
import {FC, memo, useMemo} from 'react'
import styled from 'styled-components'
import {useImageLoader} from '../hooks/useImageLoader'
import {pxToGridRowSpan} from '../utils/grid'
import {clamp} from '../utils/math'
import {prop} from '../utils/styled-helpers'
import {MasonryLayoutConfig, MasonryLayoutData} from './MasonryLayout'

type MasonryLayoutCellProps = Pick<
  MasonryLayoutConfig,
  'rowHeightBase' | 'gap' | 'cellMinHeight' | 'cellMaxHeight'
> & {
  data: MasonryLayoutData
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
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 650ms ease;
    transition-delay: 50ms;
    &:hover {
      transform: scale(1.2);
    }
  }
`

// eslint-disable-next-line react/display-name
const Image: FC<{data: MasonryLayoutData}> = memo(({data}) => (
  <img src={data.src} alt={data.name} />
))

MasonryLayoutCell.displayName = 'MasonryLayoutCell'

export default MasonryLayoutCell
