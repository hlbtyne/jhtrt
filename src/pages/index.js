import React from "react"
import "bootswatch/dist/lux/bootstrap.min.css"
import image1 from "../images/9.png"
import image6 from "../images/6.png"
import image7 from "../images/7.png"

import { CardSection } from "../components/CardSection"
import { Navbar } from "../components/Navbar"
import { HeaderSection } from "../components/HeaderSection"
import { Footer } from "../components/Footer"
import { LargeCardSection } from "../components/LargeCardSection"
import { PageContent } from "../components/PageContent"
import { TitleSection } from "../components/TitleSection"
import { TextSection } from "../components/TextSection"

export const query = graphql`
  {
    prismic {
      page(lang: "en-gb", uid: "home") {
        quote
        body1 {
          ... on PRISMIC_PageBody1Info_card {
            type
            fields {
              card_header
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
              video_url
            }
          }
          ... on PRISMIC_PageBody1Large_info_card {
            primary {
              large_card_title
              large_card_section_intro
            }
            fields {
              card_title
              large_card_text
              card_subheader
              video_url_large
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
  const infoCardsData = data.prismic.page.body1[0].fields
  const newsTitle = data.prismic.page.body1[1].primary.large_card_title[0]
  const newsCardsData = data.prismic.page.body1[1].fields
  const projectsTitle = data.prismic.page.body1[2].primary.large_card_title[0]
  const projectsData = data.prismic.page.body1[2].fields
  const testimonialsData = data.prismic.page.body1[3].fields

  console.log(projectsTitle)

  return (
    <div>
      <Navbar />
      <HeaderSection quoteData={quoteData} imageSrc={image6} />
      {infoCardsData.length ? (
        <CardSection orange cardsData={infoCardsData} />
      ) : null}
      <HeaderSection imageSrc={image7} />
      <PageContent>
        {newsTitle ? <TitleSection titleData={newsTitle} /> : null}
        {newsCardsData.length ? (
          <LargeCardSection cards={newsCardsData} />
        ) : null}

        {projectsTitle ? <TitleSection titleData={projectsTitle} /> : null}
        {projectsData.length ? <LargeCardSection cards={projectsData} /> : null}
      </PageContent>
      <HeaderSection imageSrc={image1} />
      {testimonialsData.length ? (
        <CardSection cardsData={testimonialsData} />
      ) : null}
      <Footer />
    </div>
  )
}
