import React from "react"
import styled from "styled-components"
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
        additional_page_text
        additional_title
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
            primary {
              large_card_title
              large_card_section_intro
              large_card_image
            }
            fields {
              card_title
              card_subheader
              large_card_text
              video_url_large
            }
          }
        }
        image
      }
    }
  }
`

export const BradfordLogoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
`

export const StyledBradfordLogo = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const SubmissionsPage = ({ data }) => {
  const title = data.prismic.page.title[0]
  const text = data.prismic.page.page_text
  const faqsTitle = data.prismic.page.additional_title[0]
  const faqsText = data.prismic.page.additional_page_text

  const emailData = data.prismic.page.body1[0].fields
  // const bradfordInfoTitle = data.prismic.page.body1[1].primary.large_card_title[0]
  // const bradfordInfoIntro =
  //   data.prismic.page.body1[1].primary.large_card_intro
  // const bradfordInfoData = data.prismic.page.body1[1].fields
  // const bradfordLogoSrc =
  //   data.prismic.page.body1[1].primary.large_card_section_image.url
  const projectsTitle =
    data.prismic.page.body1[1].primary.past_projects_title[0]
  const covidProjectsTitle =
    data.prismic.page.body1[2].primary.large_card_title[0]
  const projectsData = data.prismic.page.body1[1].fields
  const covidProjectsData = data.prismic.page.body1[2].fields

  return console.log(data) || (
    <div>
      <Navbar />
      <HeaderSection imageSrc={image4} />

      <PageContent>
        {title ? <TitleSection titleData={title} /> : null}
        {emailData.length > 0 ? (
          <LargeCardSection orange cards={emailData} />
        ) : null}
        {text.length > 0 ? <TextSection textData={text} /> : null}
        {faqsTitle ? <TitleSection titleData={faqsTitle} /> : null}
        {faqsText.length > 0 ? <TextSection textData={faqsText} /> : null}
        {/* {bradfordInfoTitle ? <TitleSection titleData={bradfordInfoTitle} /> : null}
        {bradfordInfoIntro ? <TextSection textData={bradfordInfoIntro} /> : null}
        {bradfordInfoData.length > 0 ? (
          <LargeCardSection orange cards={bradfordInfoData} />
        ) : null} */}
        {/* {bradfordLogoSrc ? (
          <bradfordLogoContainer>
            <StyledBradfordLogo src={bradfordLogoSrc} />
          </bradfordLogoContainer>
        ) : null} */}
      </PageContent>

      <HeaderSection imageSrc={image} />

      <PageContent>
        {projectsTitle ? <TitleSection titleData={projectsTitle} /> : null}
        {projectsData.length > 0 ? (
          <ProjectsSection projectsData={projectsData} />
        ) : null}
        {covidProjectsTitle ? (
          <TitleSection titleData={covidProjectsTitle} />
        ) : null}
        {covidProjectsData.length > 0 ? (
          <LargeCardSection cards={covidProjectsData} />
        ) : null}
      </PageContent>

      <Footer />
    </div>
  )
}

export default SubmissionsPage
