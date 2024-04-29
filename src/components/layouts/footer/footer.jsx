import React from 'react';
import Logo from '../../blocks/logo/logo';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyled>
      <Logo/>
      <span className='developer'>Создано 2021</span>
    </FooterStyled>
  )
}

const FooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  min-height: 80px;
  margin: 0 -70px;
  padding: 0 70px;
`;

export default Footer;