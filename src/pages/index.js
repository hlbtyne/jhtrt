import React from "react"

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
  
  const quote = data.prismic.page.quote[0].text
  const cardsData = data.prismic.page.body1[0].fields

  const cards = cardsData.map(card => <div>{card.card_text[0].text}</div>)

    return (
      <div>
        <div>{quote}</div>
          {cards}
        </div>
    )
}


