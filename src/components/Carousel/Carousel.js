import React from "react";
import styled from 'styled-components';
import { RichText } from '../RichText';

export const CarouselContainer = styled.div`
@media (min-width: 600px) {
    margin: 30px auto;
    }
  @media (min-width: 900px) {
    margin: 30px auto;
    max-width: 800px;
    }
  margin: 30px 0;
`;

export const CarouselCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 0 auto 30px;
    padding: 40px 20px;
    background-color: rgba(194,176,145,0.2);
    border-radius: 10px;
    height: 215px;
    @media (min-width: 950px) {
      margin: 8px 0 40px;
    }
`;

export const CardContent = styled.div`
    height: 200px;
    overflow-y: scroll;
`;

export const Carousel = ({ title, cards }) => {
  return (
    <CarouselContainer>
        {cards.map(card => <CarouselCard>
          <CardContent>
          <RichText content={card.card_title[0]} />
            {
              card.large_card_text.map(para => (<RichText content={para} />))
            }
          </CardContent>
          
          </CarouselCard>)}
    </CarouselContainer>
  );
};

export default Carousel;
