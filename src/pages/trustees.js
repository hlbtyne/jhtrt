import React from 'react'
import { graphql } from 'gatsby'
import { Navbar } from '../components/Navbar';
import { PageContent } from '../components/PageContent';
import { HeaderSection } from '../components/HeaderSection';
import TrusteeSection from '../components/TrusteesSection/TrusteesSection';
import { TitleSection } from '../components/TitleSection';
import { TextSection } from '../components/TextSection';
import image from '../images/1.png';
import { Footer } from '../components/Footer';

export const query = graphql`
{
  prismic {
    page(lang: "en-gb", uid: "trustees") {
      quote
      page_text
      title
      _meta {
        uid
      }
      body1 {
        ... on PRISMIC_PageBody1Info_card {
          type
          fields {
            card_text
          }
        }
      }
      image
      body {
        ... on PRISMIC_PageBodyTrustee {
          type
          fields {
            trustee_info
            trustee_name
            trustee_photo
          }
        }
      }
    }
  }
}
`

export const TrusteesPage = ({ data }) => {

  const trusteesData = data.prismic.page.body[0].fields;
  const title = data.prismic.page.title[0];
  const text = data.prismic.page.page_text

    return (
      <div>
        <Navbar />
        <HeaderSection imageSrc={image}/>
          {title && text && (
            <PageContent>
              <TitleSection titleData={title} />
              <TextSection textData={text} />
            </PageContent>
          ) }
        {trusteesData.length ? <TrusteeSection trusteesData={trusteesData} /> : null}
        <Footer/>    
      </div>
    )
}

export default TrusteesPage;