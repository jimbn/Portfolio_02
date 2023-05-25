import React, { useState } from "react";
import styled, {keyframes} from 'styled-components';
import { merge, fadeIn, fadeOut, fadeInLeft } from 'react-animations'
import ProjectFocus from "../ProjectFocus";
import ProjectList from "../ProjectList";
import projectArray from "../../assets/projectList/projectArray";
import "./style.css";

function Project () {
  
  // const mergeAnimation = merge(fadeInLeft, fadeIn);
  let keyAnimation = keyframes`${fadeInLeft}`;
  const keyOut = keyframes`${fadeOut}`;

  const [ focusProject, setFocusProject ] = useState(projectArray[0]);
  let Animation = styled.div`animation: 4s ${keyAnimation}`;
// to have animate out need to set useState being boolean.
// set switch component and have onclick, change this.state == true
  return(
   <>
      <Animation>
        <ProjectFocus 
          focusProject = {focusProject}
        />
      </Animation>
      <ProjectList 
        focusProject = {focusProject}
        projectArray = {projectArray}
        setFocusProject = {setFocusProject}
      />
   </>
  )
}

export default Project;