import React from "react";
import "bootswatch/dist/lux/bootstrap.min.css";
import image from '../images/6.png';

import { CardSection } from '../components/CardSection';
import { Navbar } from '../components/Navbar';
import { HeaderSection } from '../components/HeaderSection';
import { Footer } from '../components/Footer';
import { Carousel } from '../components/Carousel';
import { PageContent } from '../components/PageContent';
import { TitleSection } from '../components/TitleSection';

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
          }
          fields {
            card_title
            large_card_text
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
  const cardsData = data.prismic.page.body1[0].fields
  const projectsTitle = data.prismic.page.body1[1].primary.large_card_title[0]
  const projectsData = data.prismic.page.body1[1].fields

    return (
      <div>
        <Navbar />
        <HeaderSection quoteData={quoteData} imageSrc={image}/>
        {cardsData.length ? <CardSection cardsData={cardsData} /> : null}
        <PageContent>
          {projectsTitle ? <TitleSection titleData={projectsTitle} /> : null}
          {
            projectsData.length ? (
                <Carousel title={projectsTitle} cards={projectsData}>

                </Carousel>
            ) : null
          }
        </PageContent>
        <Footer/>
      </div>
        
    )
}


