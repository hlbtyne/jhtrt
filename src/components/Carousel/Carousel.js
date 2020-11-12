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
    background-color: ${(props) => props.orange ? "white" : "rgba(194,176,145,0.2)"};
    border: ${(props) => props.orange ? "solid 3px #db5c1a" : null};
    border-radius: 10px;
    max-height: 215px;
    @media (min-width: 950px) {
      margin: 8px 0 40px;
    }
`;

export const CardContent = styled.div`
    max-height: 200px;
    overflow-y: auto;
`;

export const Carousel = ({ cards, orange }) => {
  return (
    <CarouselContainer>
        {cards.map(card => <CarouselCard orange={orange} >
          <CardContent >
          {card.card_title ? <RichText content={card.card_title[0]} /> : null}
            {
              card.large_card_text.map(para => (<RichText content={para} />))
            }
          </CardContent>
          
          </CarouselCard>)}
    </CarouselContainer>
  );
};

export default Carousel;
