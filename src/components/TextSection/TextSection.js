import React from "react";
import styled from 'styled-components';

import { RichText } from '../RichText';

const TextContainer = styled.div`
    margin: 20px 0 50px; 
`;

const Paragraph = styled.div`
    margin: 0 0 20px;
`;

export const TextSection = ({ textData }) => {
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
