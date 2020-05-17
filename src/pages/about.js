import React from 'react'
import { graphql } from 'gatsby'

import { Navbar } from '../components/Navbar';

export const query = graphql`
{
  prismic {
    page(lang: "en-gb", uid: "about-john-hodgson") {
      quote
      _meta {
        uid
      }
      page_text
      title
      body1 {
        ... on PRISMIC_PageBody1Info_card {
          type
          fields {
            card_text
          }
        }
        ... on PRISMIC_PageBody1Past_projects {
          type
          label
          primary {
            past_projects_title
          }
          fields {
            project_date
            project_description
            researcher_name
          }
        }
      }
    }
  }
}
`

export const AboutPage = ({ data }) => {

  const quote = data.prismic.page.quote[0].text
  const text = data.prismic.page.page_text

  return (
      <div>
        <Navbar />
        About
      </div>
    )
}

export default AboutPage;