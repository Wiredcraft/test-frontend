import React from 'react'
import styled from 'styled-components'
import Input from './components/Input'
import Icon from './components/Icon'

const Nav = () => {
  return (
    <StyledNav>
      <Input />
      <Icon />
    </StyledNav>
  )
}

export default Nav

const StyledNav = styled.nav`
  height: 50px;
  width: 100%;
  background-color: var(--nav-bg);
  box-shadow: 0 0 10px var(--shadow-color);
`
