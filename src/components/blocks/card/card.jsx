import React, { useState } from 'react';
import styled from 'styled-components';
import TabButton from '../../ui/buttons/tab-button';

const Card = ({cardItem}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <CardStyled>
        <img className='card-img' src={cardItem.picture} alt={cardItem.name}/>
        <div className='card-container'>
            <p className='card-title'>{cardItem.name}</p>
            <div className='card-tabs'>
                <TabButton name='Описание' isActive={activeIndex === 0} click={() => onTabClick(0)}/>
                <TabButton name='Характеристики' isActive={activeIndex === 1} click={() => onTabClick(1)}/>
                <TabButton name='Свойства' isActive={activeIndex === 2} click={() => onTabClick(2)}/>
            </div> 
            {activeIndex === 0 && (
                <>
                    <p className='card-description'>
                    {cardItem.description}
                    </p>
                    <div className='card-price'>
                    {cardItem.price} руб./ {cardItem.weight} гр.
                    </div>
                </>
            )} 
            
            {activeIndex === 1 && (
                <p className='card-parameters'>
                {cardItem.characteristics.map((item) => {
                    return <div>
                        <span className='card-parameter-name'>{item.name}</span>:&nbsp;
                        <span className='card-parameter-value'>{item.value}</span>
                    </div>
                })}
            </p>
            )} 

            {activeIndex === 2 && (
                <p className='card-parameters'>
                {cardItem.parameters.map((item) => {
                        return <div>
                            <span className='card-parameter-name'>{item.name}</span>:&nbsp;
                            <span className='card-parameter-value'>{item.value}</span>
                        </div>
                })}
            </p>
            )} 

           
        </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px;
    background-color: ${props => props.theme.colors.backgrounds.primary};
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.theme.colors.borders.color};
    
    .card-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .card-img {
        object-fit: cover;
    }

    .card-title {
        font-size: ${props => props.theme.typography.h4.fontSize};
        font-weight: ${props => props.theme.typography.h4.fontWeight};
        line-height: ${props => props.theme.typography.h4.lineHeight};
        margin: 0;
        margin-bottom: 16px;
    }

    .card-tabs {
        display: flex;
        gap: 8px;
        margin-bottom: 16px;
    }

    .card-description {
        font-size: ${props => props.theme.typography.body.description.fontSize};
        font-weight: ${props => props.theme.typography.body.description.fontWeight};
        line-height: ${props => props.theme.typography.body.description.lineHeight};
        margin: 0;
        text-align: left;
        max-height: 105px;
        overflow-y: overlay;
    }

    .card-price {
        font-size: ${props => props.theme.typography.body.descriptionAccent.fontSize};
        font-weight: ${props => props.theme.typography.body.descriptionAccent.fontWeight};
        line-height: ${props => props.theme.typography.body.descriptionAccent.lineHeight};
        align-self: flex-start;
        background-color: ${props => props.theme.colors.backgrounds.promo};
        padding: 4px 8px;
        margin-top: auto;
    }

    .card-parameters {
        margin: 0;
        font-size: ${props => props.theme.typography.body.descriptionAccent.fontSize};
        line-height: ${props => props.theme.typography.body.descriptionAccent.lineHeight};
    }

    .card-parameter-name {
        font-weight: ${props => props.theme.typography.body.descriptionAccent.fontWeight};
    }

    .card-parameter-value {

    }
`;

export default Card