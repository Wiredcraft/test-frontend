import {FC} from 'react'
import styled from 'styled-components'
import {prop} from '../utils/styled-helpers'
import MasonryLayoutCell from './MasonryLayoutCell'

export type MasonryLayoutData = {
  _id: string
  name: string
  src: string
}

export type MasonryLayoutConfig = {
  columns: number
  cellMinHeight: number
  cellMaxHeight: number
  rowHeightBase: number
  gap: number
}

/**
 * MasonryLayout
 *
 * @param {Array} data - data to display
 * @param {Number} columns - default value is 6
 * @param {Number} cellMinHeight - px unit, default value is 200
 * @param {Number} cellMaxHeight - px unit, default value is 300
 * @param {Number} rowHeightBase - px unit, default value is 10
 * @param {Number} gap - space between cells,
 *                       px unit, default value is 16
 */
type MasonryLayoutProps = Partial<MasonryLayoutConfig> & {
  data: MasonryLayoutData[]
}

const ConfigDefaults: MasonryLayoutConfig = {
  columns: 6,
  cellMinHeight: 200,
  cellMaxHeight: 400,
  rowHeightBase: 10,
  gap: 16
}

const MasonryLayout: FC<MasonryLayoutProps> = (props) => {
  const {data, ...layoutConfig} = {
    ...ConfigDefaults,
    ...props
  }

  return (
    <MasonryLayoutWrapper
      columns={layoutConfig.columns}
      gap={layoutConfig.gap}
      rowHeightBase={layoutConfig.rowHeightBase}
    >
      {data.slice(0, 10).map((item) => (
        <MasonryLayoutCell key={item._id} data={item} {...layoutConfig} />
      ))}
    </MasonryLayoutWrapper>
  )
}

const MasonryLayoutWrapper = styled.div<{
  columns: number
  gap: number
  rowHeightBase: number
}>`
  display: grid;
  grid-gap: ${prop('gap')}px;
  grid-template-columns: repeat(${prop('columns')}, 1fr);
  grid-auto-rows: ${prop('rowHeightBase')}px;
  margin: 16px 5vw;
`

MasonryLayout.displayName = 'MasonryLayout'

export default MasonryLayout
