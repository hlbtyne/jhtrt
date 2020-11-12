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

`;

export const Project = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 8px auto 30px;
    padding: 40px 20px;
    background-color: rgba(194,176,145,0.2);
    border-radius: 10px;
    @media (min-width: 950px) {
      margin: 8px 30px 30px 0;
      width: 370px;
    }
`;

export const StyledVideo = styled.iframe`
  margin-top: 10px;
  border: none;
`;

export const ProjectsSection = ({ projectsData }) => {

  const projects = projectsData.map(project =>
    <Project>
      <RichText content={project.researcher_name[0]} />
      {project.project_date &&
        <RichText content={project.project_date[0]} />
      }
      {project.project_description.length &&
        project.project_description.map(paragraph => <RichText content={paragraph} />)
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

