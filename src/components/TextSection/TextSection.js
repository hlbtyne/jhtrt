import React from "react";
import styled from 'styled-components';

import { RichText } from '../RichText';

const TextContainer = styled.div`
    margin: 20px; 
`;

const Paragraph = styled.div`
    margin: 0 0 20px 0;
`;

export const TextSection = ({ textData }) => {
  // debugger
const paragraphs = textData.map(paragraph => 
  <Paragraph>
    <div> 
      <RichText content={paragraph} />
    </div>
  </Paragraph>);

  return(
    <TextContainer>
      {paragraphs}
    </TextContainer>
  );
};

export default TextSection;
