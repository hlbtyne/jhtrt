import React from "react";
import styled from 'styled-components';

import { RichText } from '../RichText';

const CardsContainer = styled.div`
  @media (min-width: 750px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  padding: 0 30px;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 8px 8px 20px 8px;
    padding: 40px 20px;
    box-shadow: 2px 2px 10px silver;
    @media (min-width: 750px) {
      max-width: 300px;
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
