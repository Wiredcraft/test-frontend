import React from 'react'
import { Nav, ImageDisplay } from './components'
import styled from 'styled-components'

function App() {
  return (
    <StyledGrandContainer>
      <Nav />
      <ImageDisplay />
    </StyledGrandContainer>
  )
}

export default App

const StyledGrandContainer = styled.div`
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
