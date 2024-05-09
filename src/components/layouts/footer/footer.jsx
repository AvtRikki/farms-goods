import React from 'react';
import Logo from '../../blocks/logo/logo';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyled>
      <div className='footer-container'>
        <Logo/>
        <span className='developer'>Создано 2021</span>
      </div>
    </FooterStyled>
  )
}

const FooterStyled = styled.div`
  margin: 0 -70px;
  padding: 0 70px;

  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    min-height: 80px;
  }
`;

export default Footer;