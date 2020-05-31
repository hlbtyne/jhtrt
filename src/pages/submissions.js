import React from 'react'
import { graphql } from 'gatsby'

import { TitleSection } from '../components/TitleSection';
import { TextSection } from '../components/TextSection';
import { PageContent } from '../components/PageContent';
import { Navbar } from '../components/Navbar';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';


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

  const title = data.prismic.page.title[0];
  const text = data.prismic.page.page_text
  const projectsTitle = data.prismic.page.body1[0].primary.past_projects_title[0]
  const projectsData = data.prismic.page.body1[0].fields

    return (
      <div>
        <Navbar />
        <PageContent>
          {title ? <TitleSection titleData={title} /> : null}
          {text.length ? <TextSection textData={text} /> : null}
          </PageContent>
          <PageContent>
          {projectsTitle ? <TitleSection titleData={projectsTitle} /> : null}
          {projectsData.length ? <ProjectsSection projectsData={projectsData} /> : null}
        </PageContent>
      </div>
        
    )
}

export default SubmissionsPage;