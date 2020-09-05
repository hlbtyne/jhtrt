import React from 'react'
import { graphql } from 'gatsby'
import image from '../images/7.png';

import { Navbar } from '../components/Navbar';
import { HeaderSection } from '../components/HeaderSection';
import { TitleSection } from '../components/TitleSection';
import { CardSection } from '../components/CardSection';
import { PageContent } from '../components/PageContent';
import { Footer } from '../components/Footer';


export const query = graphql`
{
  prismic {
    page(lang: "en-gb", uid: "contact") {
      _meta {
        uid
      }
      title
      body1 {
        ... on PRISMIC_PageBody1Info_card {
          type
          fields {
            card_header
            card_text
          }
        }
      }
    }
  }
}
`;

export const AboutPage = ({ data }) => {

  const title = data.prismic.page.title[0]
  const cardsData = data.prismic.page.body1[0].fields

  return (
      <div>
        <Navbar />
        <HeaderSection imageSrc={image}/>
        <PageContent style={{"paddingBottom": "60px"}}>
          {title ? <TitleSection titleData={title} /> : null}
          {cardsData.length ? <CardSection cardsData={cardsData} /> : null}
        </PageContent>
        <Footer/>
      </div>
    )
}

export default AboutPage;