import React from 'react';
import styled from 'styled-components';
import { goods } from '../../../mocks/mock-data';

const Filters = ({ onSelectProduct }) => {
  return (
    <FilterStyled>
      <p className='section-title'>Выберите продукты</p>
      <div className="checkbox-container">
      {goods && goods.map((item, index) => {
        return <label key={item.id} className="item-checkbox" onChange={(e) => onSelectProduct(item, index, e.target.checked)}>
          <span>{item.name}</span>
          <input className="item-checkbox-element" type="checkbox"></input>
          <span className="item-checkmark-element"></span>
        </label>
      })}
      </div>
    </FilterStyled>
  )
}

const FilterStyled = styled.div`
    background-color: ${props => props.theme.colors.backgrounds.primary};
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.theme.colors.borders.color};
    padding: 24px 20px;
    min-width: 335px;

    .section-title {
      margin: 0;
      margin-bottom: 12px;
      font-weight: ${props => props.theme.typography.h3.fontWeight};
    }

    .checkbox-container {
      display: flex;
      flex-direction: column;
    }

    .item-checkbox {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 15px;
      margin-bottom: 15px;
    }

    .item-checkbox span:first-child {
      flex-grow: 1;
      text-align: left;
    }

    .item-checkbox-element {
      appearance: none;
      width: 24px;
      height: 24px;
      background-color: ${props => props.theme.colors.backgrounds.container};
      cursor: pointer;
      position: relative;
      margin: 0;
      border-width: 1px;
      border-style: solid;
      border-color: ${props => props.theme.colors.borders.color};
    }

    .item-checkbox-element:checked {
      background-color: #FC9B27;
    }

    .item-checkbox-element:checked::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      background-image: url('data:image/svg+xml,<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.7657 0.359252C15.4533 0.0468143 14.9468 0.0468143 14.6343 0.359252L5.04983 9.94385L1.3657 6.25972C1.0533 5.94728 0.546797 5.94731 0.234328 6.25972C-0.0781094 6.57213 -0.0781094 7.07863 0.234328 7.39106L4.48414 11.6408C4.79645 11.9532 5.30333 11.953 5.61552 11.6408L15.7657 1.49063C16.0781 1.17822 16.0781 0.671689 15.7657 0.359252Z" fill="white"/></svg>');
      width: 16px;
      height: 12px;
      transform: translate(-50%, -50%);
    }
`;

export default Filters