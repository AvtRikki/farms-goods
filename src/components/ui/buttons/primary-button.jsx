import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const PrimatyButton = ({text, link, maxWidth, className, onClick, ...props}) => {
  return (
    <PrimatyButtonStyled {...props}
      $maxWidth={maxWidth}
      {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
      className={className}>{text}</PrimatyButtonStyled>
  )
}

const PrimatyButtonStyled = styled(Link)`
  display: block;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  color: ${props =>  props.color ?? props.theme.colors.texts.accent};
  background-color: ${props => props.backgroundColor ?? props.theme.colors.backgrounds.buttons.primary};
  padding: 16px 10px;
  min-height: 60px;
  min-width: ${(props) => (props.$maxWidth ? "100%" : "260px")};
  text-align: center;
  border-style: none;
  text-decoration: none;

  &:hover {
    background-color: ${props => props.theme.colors.backgrounds.buttons.primaryHover};
  }

  &:active {
    opacity: 0.8;
    background-color: ${props => props.theme.colors.backgrounds.buttons.primaryHover};
  }

  &:disabled {
    opacity: 0.3;
  }
`;

export default PrimatyButton