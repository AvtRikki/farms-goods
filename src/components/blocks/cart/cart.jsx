import React, { useState } from 'react';
import styled from 'styled-components';
import PrimatyButton from '../../ui/buttons/primary-button'

const Cart = ({selectedProducts}) => {
  const [address, setAddress] = useState("");
  const totalSum = selectedProducts.reduce((sum, product) => sum + product.price, 0);

  const handleBuyClick = () => {
    alert(`Спасибо за заказ, вы купили:\n${selectedProducts.map(
      (product) => `${product.name} - ${product.price} руб.\n`
    )}
    Итого: ${totalSum} руб.
    Доставка по адресу: ${address}.`);
  };

  return (
    <CartStyled onSubmit={handleBuyClick}>
      <p className='section-title'>Сделать заказ</p>
      <input className="address" placeholder='Введите адрес доставки' onChange={(e) => setAddress(e.target.value)}></input>
      <span className='price-title'>Цена</span>
      <span className='price-value'>{totalSum}</span>
      <PrimatyButton text={"Купить"} disabled={!address}/>
    </CartStyled>
  )
}

const CartStyled = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.backgrounds.primary};
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.colors.borders.color};
  padding: 24px 20px;
  min-width: 335px;

.address {
  display: block;
  height: 48px;
  width: 100%;
  background-color: ${props => props.theme.colors.backgrounds.alternative};
  border: 1px solid ${props => props.theme.colors.backgrounds.alternative}${props => props.theme.colors.borders.color};
  box-sizing: border-box;
  padding-left: 12px;
  padding-right: 12px;
  font-size: ${props => props.theme.typography.body.description.fontSize};
  margin-bottom: 20px;
}

.price-title {
  font-size: ${props => props.theme.typography.body.description.fontSize};
  margin-bottom: 6px;
  display: block;
}

.price-value {
  display: block;
  font-size: ${props => props.theme.typography.h4.fontSize};
  font-weight: bold;
  margin-bottom: 30px;
}

.section-title {
    margin: 0;
    margin-bottom: 12px;
    font-weight: ${props => props.theme.typography.h3.fontWeight};
  }
`;

export default Cart