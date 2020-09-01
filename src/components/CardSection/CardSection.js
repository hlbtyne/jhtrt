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
    margin: 8px auto 30px;
    padding: 40px 20px;
    border: 1px solid rgba(0,0,0,0.1);
    @media (min-width: 950px) {
      margin: 8px 20px 30px 20px;
      width: 400px;
    }
`;

export const CardSection = ({ cardsData }) => {

  const cards = cardsData.map(card => 
    <Card>
      <div> 
        <RichText content={card.card_text[0]} />
      </div>
    </Card>);

  return(
    <CardsContainer>
      {cards}
    </CardsContainer>
  );
};

export default CardSection;
