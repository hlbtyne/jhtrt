import React from "react";
import styled from 'styled-components';

import { RichText } from '../RichText';

export const ProjectsContainer = styled.div`
  @media (min-width: 950px) {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    margin: 20px auto;
  }
  margin: 20px 0;
  padding: 0 20px;

`;

export const Project = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 800px;
    margin: 8px auto 30px;
    padding: 40px 20px;
    border: 1px solid rgba(0,0,0,0.1);
    @media (min-width: 950px) {
      margin: 8px 20px 30px 20px;
      width: 340px;
    }
`;

export const StyledVideo = styled.iframe`
  margin-top: 10px;
  border: none;
`;

export const ProjectsSection = ({ projectsData }) => {

  const projects = projectsData.map(project => console.log(project.researcher_name[0]) ||
    <Project>
      <RichText content={project.researcher_name[0]} />
      {project.project_date &&
        <RichText content={project.project_date[0]} />
      }
      {project.project_description &&
        <RichText content={project.project_description[0]} />
       }
       {project.video_url && 
         <StyledVideo 
          width="100%" 
          height="300"
          src={project.video_url} 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
         />
       }
    </Project>);

  return(
      <ProjectsContainer>
        {projects}
      </ProjectsContainer>
  );
};

export default ProjectsSection;

