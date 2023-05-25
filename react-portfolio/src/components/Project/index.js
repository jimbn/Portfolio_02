import React, { useState } from "react";
import styled, {keyframes} from 'styled-components';
import { fadeIn } from 'react-animations'
import ProjectFocus from "../ProjectFocus";
import ProjectList from "../ProjectList";
import projectArray from "../../assets/projectList/projectArray";
import "./style.css";

function Project () {

  

  const [ focusProject, setFocusProject ] = useState(projectArray[0]);
  const FadeIn = styled.div`animations: 2s ${keyframes`${fadeIn}`}`;



  return(
   <>
        <FadeIn>
        <ProjectFocus 
          focusProject = {focusProject}
        />
        </FadeIn>
    <ProjectList 
      focusProject = {focusProject}
      projectArray = {projectArray}
      setFocusProject = {setFocusProject}
    />
   </>
  )
}

export default Project;
