import React from "react";
import styled from 'styled-components';

import { RichText } from '../RichText';

export const QuoteSection = ({ quoteData }) => {

  const QuoteContainer = styled.div`
    margin: 20px; 
  `

  return(
    <QuoteContainer>
      <RichText content={quoteData} />
    </QuoteContainer>
  );
};

export default QuoteSection;
