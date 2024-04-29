import React from 'react'
import styled from 'styled-components';
import Logo from '../../blocks/logo/logo';
import Navigation from '../../blocks/navigation/navigation';

const Header = () => {
  return (
    <HeaderStyled>
      <Logo/>
      <Navigation/>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
`;

export default Header;