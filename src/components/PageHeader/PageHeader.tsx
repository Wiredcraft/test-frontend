import {rgba} from 'polished'
import styled from 'styled-components'

const PageHeader = styled.header`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 45px;
  height: 70px;
  box-shadow: 0 4px 8px ${rgba('#000', 0.1)};
`

export default PageHeader
