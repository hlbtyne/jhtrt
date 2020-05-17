import React from "react";
import "bootswatch/dist/lux/bootstrap.min.css";

import { CardSection } from '../components/CardSection';
import { RichText } from '../components/RichText';
import { Navbar } from '../components/Navbar';

export const query = graphql`
{
  prismic {
    page(lang: "en-gb", uid: "home") {
      quote
      body1 {
        ... on PRISMIC_PageBody1Info_card {
          type
          fields {
            card_text
          }
        }
      }
      _meta {
        uid
      }
      page_text
    }
  }
}
`

export default ({ data }) => {
  
  const quote = data.prismic.page.quote[0]
  const cardsData = data.prismic.page.body1[0].fields

    return (
      <div>
        <Navbar />
        <RichText content={quote} />
        <CardSection cardsData={cardsData} />
      </div>
        
    )
}


