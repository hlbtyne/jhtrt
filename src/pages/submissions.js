import React from "react"
import { graphql } from "gatsby"
import image4 from "../images/4.png"
import image from "../images/2.png"

import { TitleSection } from "../components/TitleSection"
import { TextSection } from "../components/TextSection"
import { PageContent } from "../components/PageContent"
import { HeaderSection } from "../components/HeaderSection"
import { Navbar } from "../components/Navbar"
import { ProjectsSection } from "../components/ProjectsSection/ProjectsSection"
import { Footer } from "../components/Footer"
import { LargeCardSection } from "../components/LargeCardSection"

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
              card_header
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
            fields {
              card_title
              large_card_text
            }
          }
        }
        image
      }
    }
  }
`

export const SubmissionsPage = ({ data }) => {
  const title = data.prismic.page.title[0]
  const text = data.prismic.page.page_text
  const emailData = data.prismic.page.body1[0].fields
  const projectsTitle =
    data.prismic.page.body1[1].primary.past_projects_title[0]
  const projectsData = data.prismic.page.body1[1].fields

  return (
    <div>
      <Navbar />
      <HeaderSection imageSrc={image4} />
      <PageContent>
        {title ? <TitleSection titleData={title} /> : null}
        {text.length ? <TextSection textData={text} /> : null}
        {emailData.length ? (
          <LargeCardSection orange cards={emailData} />
        ) : null}
      </PageContent>
      <HeaderSection imageSrc={image} />
      <PageContent>
        {projectsTitle ? <TitleSection titleData={projectsTitle} /> : null}
        {projectsData.length ? (
          <ProjectsSection projectsData={projectsData} />
        ) : null}
      </PageContent>
      <Footer />
    </div>
  )
}

export default SubmissionsPage
