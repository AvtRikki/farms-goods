import React from 'react'
import styled from 'styled-components'
import Label from '../../ui/labels/label';

const AdvantageItem = ({icon, name, positive, description}) => {
  return (
    <AdvantageItemStyled positive={positive}>
      <div className='header-section'>
        {icon && React.createElement(icon)}
        <div className='header'>
            <Label positive={positive}/>
            <span className='title'>{name}</span>
        </div>
      </div>
      <div className='description'>
        {description}
      </div>
    </AdvantageItemStyled>
  )
}

const AdvantageItemStyled = styled.div`
    background-color: ${props => props.positive ? props.theme.colors.backgrounds.blocks.positive : props.theme.colors.backgrounds.blocks.negative };
    min-height: 197px;
    padding: 20px;
    box-sizing: border-box;

    .header-section {
        display: flex;
    }

    .header {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        align-items: start;
    }

    .title {
        font-weight: 700;
    }

    .description {
        padding: 20px 0;
        max-width: ${props => props.positive ? '490px' : '440px' };
    }
`;

export default AdvantageItem