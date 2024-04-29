import React from 'react'
import styled from 'styled-components'

const PrimatyButton = ({text}) => {
  return (
    <PrimatyButtonStyled>{text}</PrimatyButtonStyled>
  )
}

const PrimatyButtonStyled = styled.button`
box-sizing: border-box;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    color: ${props => props.theme.colors.texts.accent};
    background-color: ${props => props.theme.colors.backgrounds.buttons.primary};
    padding: 16px 10px;
    min-height: 60px;
    min-width: 260px;
    text-align: center;
    border-style: none;
`;

export default PrimatyButton