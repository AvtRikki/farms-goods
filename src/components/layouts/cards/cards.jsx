import React from 'react';
import styled from 'styled-components';
import { goods } from '../../../mocks/mock-data';
import Card from '../../blocks/card/card';

const Cards = () => {
  return (
    <CardsStyled>
        {goods && goods.map((item) => {
            return <Card key={item.name} cardItem={item}/>
        })}
    </CardsStyled>
  )
}

const CardsStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export default Cards