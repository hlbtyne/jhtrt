import React from "react";
import "bootswatch/dist/lux/bootstrap.min.css";
import image from '../images/6.png';

import { CardSection } from '../components/CardSection';
import { Navbar } from '../components/Navbar';
import { HeaderSection } from '../components/HeaderSection';

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
  
  const quoteData = data.prismic.page.quote[0]
  const cardsData = data.prismic.page.body1[0].fields

    return (
      <div style={{"paddingBottom": "100px",}}>
        <Navbar />
        <HeaderSection quoteData={quoteData} imageSrc={image}/>
        {cardsData.length ? <CardSection cardsData={cardsData} /> : null}
      </div>
        
    )
}


