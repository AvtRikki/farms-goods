import React from 'react'
import styled from 'styled-components'

const Promo = () => {
  return (
    <PromoStyled>
        <div>
            <h1 className='hero-title'>Магазин фермерских продуктов с доставкой</h1>
            <p className='hero-description'>Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день 
            до отправки заказа клиентам. Именно поэтому мы принимаем 
            заказы заранее и доставляем продукты максимально свежими.</p>
        </div>
        <div className='hero-image'>
        </div>
    </PromoStyled>
  )
}

const PromoStyled = styled.section`
    position: relative;
    display: flex;
    background-color: ${props => props.theme.colors.backgrounds.promo};
    margin: 0 -70px;
    padding: 183px 90px;
    overflow: hidden;

    .hero-title {
        margin: 0;
        font-size: ${props => props.theme.typography.h1.fontSize};
        font-weight: ${props => props.theme.typography.h1.fontWeight};
        line-height: ${props => props.theme.typography.h1.lineHeight};
        max-width: 637px;
        margin-bottom: 24px;
    }

    .hero-description {
        margin: 0;
        max-width: 508px;
    }

    .hero-image::before {
        content: "";
        position: absolute;
        width: 446px;
        height: 446px;
        border-radius: 50%;
        top: 76px;
        right: 90px;
        background-color: ${props => props.theme.colors.backgrounds.promoDecoration};
    }

    .hero-image::after {
        content: "";
        position: absolute;
        background-image: url('/assets/farmer.svg');
        width: 273px;
        height: 607px;
        top: 56px;
        right: 177px;
        background-repeat: no-repeat;
        background-position: center;
    }
`;

export default Promo