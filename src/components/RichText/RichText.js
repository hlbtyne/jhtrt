import React from "react";
import styled from 'styled-components';
import './RichText.css';

export const Highlight = styled.div`
  font-size: 16px;
  color: ${(props) => props.white ? 'white' : null};
`;

export const RichText = ({ content, color }) => {
  switch (color) {
    case "white":
      switch (content.type) {
        case "heading1":
          return <h1 class="white">{content.text}</h1>;
        case "heading2":
          return <h2 class="white">{content.text}</h2>;
        case "heading3":
          return <h3 class="white">{content.text}</h3>;
        case "heading4":
          return <h4 class="white">{content.text}</h4>;
        case "heading5":
          return <h5 class="white">{content.text}</h5>;
        case "heading6":
          return <Highlight white>{content.text}</Highlight>;
        case "paragraph":
          return <div class="white">{content.text}</div>;  
        default:
        return <div>{content.text}</div>; 
      }
    default: 
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
  }
}

RichText.defaultProps = {
  color: 'black',
};

export default RichText;
