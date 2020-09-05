import React from "react";
import styled from 'styled-components';

import { RichText } from '../RichText';

export const CardsContainer = styled.div`
  @media (min-width: 950px) {
    display: flex;
    justify-content: center;
    max-width: 1200px;
    margin: 50px auto;
  }
  padding: 0 20px;
  margin: 50px auto;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  min-width: 225px;
  margin: 8px auto 30px;
  padding: 40px 20px;
  background-color: rgba(194,176,145,0.2);
  border-radius: 10px;
  @media (min-width: 950px) {
    margin: 8px 20px 30px 20px;
    width: 400px;
  }
`;

export const CardSection = ({ cardsData }) => {

  const cards = cardsData.map(card => 
    <Card>
        {card.card_header && <RichText content={card.card_header[0]} /> }
        {card.card_text && <RichText content={card.card_text[0]} /> }
    </Card>);

  return(
    <CardsContainer>
      {cards}
    </CardsContainer>
  );
};

export default CardSection;
