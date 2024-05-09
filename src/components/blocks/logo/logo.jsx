import React from 'react'
import { LogoIcon } from '../../../assets/constants'
import styled from 'styled-components'

const Logo = () => {
  return (
    <LogoStyled href='/'>
        <div className='logo-icon'>
            <LogoIcon/>
       </div>
       <span className='logo-title'>Фермерские продукты</span>
    </LogoStyled>
  )
}

const LogoStyled = styled.a`
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.texts.primary};
    text-decoration: none;

    .logo-icon {
        margin-right: 24px;
    }

    .logo-title {
        font-size: 28px;
        font-weight: 700;
        line-height: 32px;
    }
`;

export default Logo