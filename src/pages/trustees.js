import React from 'react'
import { graphql } from 'gatsby'
import { Navbar } from '../components/Navbar';
import TrusteeSection from '../components/TrusteesSection/TrusteesSection';


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

  const trusteesData = data.prismic.page.body[0].fields

    return (
      <div>
        <Navbar />
        {trusteesData.length ? <TrusteeSection trusteesData={trusteesData} /> : null}      
      </div>
    )
}

export default TrusteesPage;