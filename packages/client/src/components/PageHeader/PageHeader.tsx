import {rgba} from 'polished'
import {FC} from 'react'
import styled from 'styled-components'

const PageHeader: FC = (props) => {
  return (
    <PageHeaderWrapper>
      <PageHeaderContent>{props.children}</PageHeaderContent>
    </PageHeaderWrapper>
  )
}

const PageHeaderWrapper = styled.div`
  height: 70px;
`

const PageHeaderContent = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1001;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 45px;
  height: 70px;
  background-color: #fff;
  box-shadow: 0 4px 8px ${rgba('#000', 0.1)};
`

export default PageHeader
