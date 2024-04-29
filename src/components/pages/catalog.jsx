import React from 'react';
import styled from 'styled-components';
import Filters from '../blocks/filters/filters';
import Cart from '../blocks/cart/cart';
import Cards from '../layouts/cards/cards';

const Catalog = () => {
  return (
    <CatalogStyled>
        <div className='side-panel'>
            <Filters/>
            <Cart/>
        </div>
        <Cards/>
    </CatalogStyled>
  )
}

const CatalogStyled = styled.div`
    display: flex;
    gap: 20px;
    padding-top: 40px;
    padding-left: 70px;
    padding-right: 70px;
    background-color: ${props => props.theme.colors.backgrounds.container};

    .side-panel {
        display: flex;
        flex-direction: column;
        gap: 18px;
    }
`;

export default Catalog