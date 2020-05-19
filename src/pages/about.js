import React from 'react'
import { graphql } from 'gatsby'

import { Navbar } from '../components/Navbar';
import { QuoteSection } from '../components/QuoteSection';
import { TitleSection } from '../components/TitleSection';
import { TextSection } from '../components/TextSection';
import { PageContent } from '../components/PageContent';

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
`;

export const AboutPage = ({ data }) => {

  const quote = data.prismic.page.quote[0]
  const title = data.prismic.page.title[0]
  const text = data.prismic.page.page_text

  return (
      <div>
        <Navbar />
        {quote ? <QuoteSection quoteData={quote} /> : null}
        <PageContent>
          {title ? <TitleSection titleData={title} /> : null}
          {text.length ? <TextSection textData={text} /> : null}
        </PageContent>
      </div>
    )
}

export default AboutPage;