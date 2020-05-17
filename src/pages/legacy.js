import React from 'react'
import { graphql } from 'gatsby'
import { Navbar } from '../components/Navbar';


export const query = graphql`
{
  prismic {
    page(lang: "en-gb", uid: "legacy") {
      quote
      page_text
      title
      _meta {
        uid
      }
    }
  }
}
`


export const LegacyPage = ({ data }) => {

  const quote = data.prismic.page.quote[0].text
  const text = data.prismic.page.page_text

    return (
      <div>
        <Navbar />
        Legacy
      </div>
    )
}

export default LegacyPage;