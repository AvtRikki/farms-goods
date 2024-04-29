import React from 'react'
import styled from 'styled-components';
import { advantagesData } from '../../../mocks/mock-data';
import AdvantageItem from './advantageItem';
import PrimatyButton from '../../ui/buttons/primary-button';

const Advantages = () => {
  return (
    <BenefitsStyled>
        <h2 className='section-title'>Почему фермерские продукты лучше?</h2>
        <div className='advantages-container'>
          {advantagesData && advantagesData.map((item) => {
            return <AdvantageItem key={item.name} icon={item.icon} name={item.name} positive={item.positive} description={item.description}/>
          }) }
        </div>
        <PrimatyButton text={"Купить"}/>
    </BenefitsStyled>
  )
}

const BenefitsStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0;

    .section-title {
        margin: 0;
        padding: 0;
        font-size: ${props => props.theme.typography.h2.fontSize};
    }

    .advantages-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      padding: 64px 0;
    }
`;

export default Advantages;