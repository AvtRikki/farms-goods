import React, {useState} from 'react';
import styled from 'styled-components';
import Filters from '../blocks/filters/filters';
import Cart from '../blocks/cart/cart';
import Cards from '../layouts/cards/cards';

const Catalog = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);

  const handleSelectProduct = (product, index, isChecked) => {
    setSelectedProducts(prevProducts => {
      if (isChecked) {
        swiperRef?.slideTo(index, 0);
        return [...prevProducts, product];
      } else {
        return prevProducts.filter(p => p.id !== product.id);
      }
    });
  };

  return (
    <CatalogStyled>
        <div className='side-panel'>
            <Filters onSelectProduct={handleSelectProduct}/>
            <Cart selectedProducts={selectedProducts}/>
        </div>
        <Cards onSwiper={setSwiperRef}/>
    </CatalogStyled>
  )
}

const CatalogStyled = styled.div`
    display: flex;
    gap: 20px;
    padding-top: 40px;
    padding-left: 70px;
    padding-right: 70px;
    flex: 1;
    background-color: ${props => props.theme.colors.backgrounds.container};

    .side-panel {
        display: flex;
        flex-direction: column;
        gap: 18px;
        margin-bottom: 20px;
    }
`;

export default Catalog