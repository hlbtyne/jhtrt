import React from "react";
import styled from 'styled-components';

import { QuoteSection } from '../QuoteSection';

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 350px;
    background-color: black;
`;

export const HeaderImage = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 38%;
    opacity: 0.7;
`;

export const HeaderSection = ({ quoteData, imageSrc }) => {

    return(
        <ImageContainer>
            <HeaderImage src={imageSrc}/>
            {quoteData ? <QuoteSection quoteData={quoteData} /> : null}
        </ImageContainer>
    )
}


export default HeaderSection;
