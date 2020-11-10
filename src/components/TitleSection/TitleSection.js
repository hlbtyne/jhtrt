import React from "react";
import styled from 'styled-components';

import { RichText } from '../RichText';


export const TitleSection = ({ titleData }) => {

  const TitleContainer = styled.div`
    /* margin: 20px;  */
  `;

  return(
    <TitleContainer>
      <RichText content={titleData}/>
    </TitleContainer>
  );
};

export default TitleSection;
