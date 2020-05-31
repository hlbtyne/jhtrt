import React from "react";
import styled from 'styled-components';

import { RichText } from '../RichText';

export const ProjectsContainer = styled.div`
  @media (min-width: 950px) {
    display: flex;
    justify-content: center;
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

export const ProjectsSection = ({ projectsData }) => {
  console.log(projectsData)
  const projects = projectsData.map(project => 
    <Project>
      <div> 
        <RichText content={project.researcher_name[0]} />
      </div>
      {project.project_description ?
      <div> 
        <RichText content={project.project_description[0]} />
      </div> : null
       }
    </Project>);

  return(
      <ProjectsContainer>
        {projects}
      </ProjectsContainer>
  );
};

export default ProjectsSection;
