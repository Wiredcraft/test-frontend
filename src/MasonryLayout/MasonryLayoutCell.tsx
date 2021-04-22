import {FC, memo} from 'react'
import styled from 'styled-components'
import {MasonryLayoutData} from './MasonryLayout'

type MasonryLayoutCellProps = {
  data: MasonryLayoutData
  rowHeightBase: number
  rowGap: number
}

const MasonryLayoutCell: FC<MasonryLayoutCellProps> = memo((props) => {
  const {data} = props
  return (
    <MasonryLayoutCellWrapper>
      <img src={data.src} height={200} alt={data.name} />
    </MasonryLayoutCellWrapper>
  )
})

const MasonryLayoutCellWrapper = styled.figure`
  grid-row-end: span 8;
  margin: 0;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

MasonryLayoutCell.displayName = 'MasonryLayoutCell'

export default MasonryLayoutCell
