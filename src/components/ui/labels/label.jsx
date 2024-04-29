import React from 'react'
import styled from 'styled-components'

const Label = ({positive}) => {
  return (
     <LabelStyled positive={positive}>{positive ? "Фермерские продукты" : "Магазинные продукты"}</LabelStyled>
  )
}

const LabelStyled = styled.div`
  font-size: 14px;
  line-height: 21px;
  color: ${props => props.theme.colors.texts.accent};
  padding: 2px 10px;
  background-color: ${props => props.positive ? props.theme.colors.backgrounds.labels.positive : props.theme.colors.backgrounds.labels.negative};
`;

export default Label