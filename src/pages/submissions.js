import React from 'react'
// import { graphql } from 'gatsby'

export const query = graphql`
{
  prismic {
    page(lang: "en-gb", uid: "submissions") {
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
      image
    }
  }
}
`

export const SubmissionsPage = ({ data }) => {

    return (
      <div>
        Submissions
        </div>
    )
}

export default SubmissionsPage;