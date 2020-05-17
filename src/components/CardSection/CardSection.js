import React from "react";
import styled from 'styled-components';

import { RichText } from '../RichText';

const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0 30px;
  `;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 300px;
    margin: 8px;
    padding: 40px 20px;
    box-shadow: 5px 5px 20px silver;
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
