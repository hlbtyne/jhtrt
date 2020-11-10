import React from "react";
import styled from 'styled-components';

export const Highlight = styled.div`
  font-size: 16px;
  color: ${(props) => props.orange ? '#db5c1a' : null};
`;

export const Quote = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
  line-height: 1.2;
  font-weight: bold;
  color: white;
  opacity: 0.8;
  @media (min-width: 600px) {
      font-size: 28px;
  }
`;

export const PageTitle = styled.h1`
  color: #db5c1a;
  font-weight: bold;
`;

export const RichText = ({ content, quote, orange }) => {
  if (quote) {
    return <Quote>{content.text}</Quote>;
  }
  switch (content.type) {
    case "heading1":
      return <PageTitle>{content.text}</PageTitle>;
    case "heading2":
      return <h2>{content.text}</h2>;
    case "heading3":
      return <h3>{content.text}</h3>;
    case "heading4":
      return <h4>{content.text}</h4>;
    case "heading5":
      return <h5>{content.text}</h5>;
    case "heading6":
      return <Highlight orange={orange}>{content.text}</Highlight>;
    case "paragraph":
      return <div>{content.text}</div>;  
    default:
    return <div>{content.text}</div>; 
  }
}

RichText.defaultProps = {
  orange: false,
};

export default RichText;
