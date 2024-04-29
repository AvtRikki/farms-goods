import React from 'react';
import styled from 'styled-components';

const TabButton = ({name, isActive, click}) => {
  return (
    <TabButtonStyled isActive={isActive} onClick={click} type='button'>{name}</TabButtonStyled>
  )
}

const TabButtonStyled = styled.button`
  padding: 8px 12px;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  border-color: ${props => props.theme.colors.borders.color};
  background-color: ${props => props.isActive ? props.theme.colors.backgrounds.labels.positive : props.theme.colors.backgrounds.buttons.secondary};
  color: ${props => props.isActive ? props.theme.colors.texts.accent : props.theme.colors.texts.primary};
  font-size: ${props => props.theme.typography.body.description.fontSize};
  font-weight: ${props => props.theme.typography.body.description.fontWeight};
  line-height: ${props => props.theme.typography.body.description.lineHeight};
`;

export default TabButton