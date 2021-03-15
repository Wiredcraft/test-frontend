import React from 'react'
import styled from 'styled-components'
import Input from './components/Input'
import { BsFillHouseFill, BsBellFill, BsPeopleCircle } from 'react-icons/bs'
import Logo from '../../assets/img/logo.png'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <div className='logo'>
        <img src={Logo} alt='logo' />
        <span>Mansonry Layout</span>
      </div>
      <div>
        <Input />
        <BsFillHouseFill />
        <BsBellFill />
        <BsPeopleCircle />
      </div>
    </StyledNav>
  )
}

export default Nav

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 58px;
  width: 100%;
  background-color: var(--nav-bg);
  box-shadow: 0 0 10px var(--shadow-color);
  > div {
    display: flex;
    align-items: center;
    margin-right: 30px;
  }
  .logo {
    > img {
      width: 30px;
      height: 30px;
      margin-left: 30px;
      border-radius: 5px;
    }
    > span {
      margin-left: 15px;
      color: #464646;
      font-weight: 800;
      letter-spacing: 0.05em;
      font-family: 'Courier New', Courier, monospace;
    }
  }
  svg {
    margin: 0 12px;
    color: grey;
  }
`
