import React from "react";
import styled from 'styled-components';

export const Highlight = styled.div`
  font-size: 16px;
`;

export const RichText = ({ content }) => {
  switch (content.type) {
    case "heading1":
      return <h1>{content.text}</h1>;
    case "heading2":
      return <h2>{content.text}</h2>;
    case "heading3":
      return <h3>{content.text}</h3>;
    case "heading4":
      return <h4>{content.text}</h4>;
    case "heading5":
      return <h5>{content.text}</h5>;
    case "heading6":
      return <Highlight>{content.text}</Highlight>;
    case "paragraph":
      return <div>{content.text}</div>;  
    default:
    return <div>{content.text}</div>; 
  }
};

export default RichText;
