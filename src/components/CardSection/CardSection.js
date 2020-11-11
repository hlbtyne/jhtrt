import React from "react";
import styled from 'styled-components';

import { RichText } from '../RichText';

export const CardsContainer = styled.div`
  @media (min-width: 950px) {
    display: flex;
    justify-content: space-between;
    padding: 40px;
  }
  background-color: rgba(194,176,145,0.4);
  padding: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 225px;
  margin: 8px auto 30px;
  padding: 50px 25px;
  border: solid 3px #db5c1a;
  border-radius: 10px;
  @media (min-width: 950px) {
    margin: 8px 20px;
    width: 420px;
  }
`;

export const CardSection = ({ cardsData }) => {

  const cards = cardsData.map(card => 
    <Card>
        {card.card_header && <RichText content={card.card_header[0]} /> }
        {card.card_text && <RichText orange content={card.card_text[0]} /> }
    </Card>);

  return(
    <CardsContainer>
      {cards}
    </CardsContainer>
  );
};

export default CardSection;
