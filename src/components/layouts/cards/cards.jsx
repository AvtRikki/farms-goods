import React from 'react';
import styled from 'styled-components';
import { goods } from '../../../mocks/mock-data';
import Card from '../../blocks/card/card';
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

const Cards = ({onSwiper}) => {
  return (
    <CardsStyled>
       <Swiper
        className='swiper-container'
        onSwiper={onSwiper}
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{
          type: "fanction"
        }}
      >
        {goods && goods.map((item) => {
             return (<SwiperSlide key={item.name}>
              <Card key={item.name} cardItem={item}/>
            </SwiperSlide>)
        })}
      </Swiper>
   </CardsStyled>
  )
}

const CardsStyled = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  
  .swiper-container {
    position: absolute;
    top: 0;
    bottom: 10px;
  }

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export default Cards