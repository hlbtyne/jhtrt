import React from "react";
import styled from 'styled-components';

import { RichText } from '../RichText';

export const QuoteSection = ({ quoteData }) => {
  const QuoteContainer = styled.div`
    padding: 20px; 
  `

  return(
    <QuoteContainer>
      <RichText content={quoteData} color="white"/>
    </QuoteContainer>
  );
};

export default QuoteSection;
