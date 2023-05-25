import React, { useState } from "react";
import ProjectFocus from "../ProjectFocus";
import ProjectList from "../ProjectList";
import projectArray from "../../assets/projectList/projectArray";
import "./style.css";
import { Transition } from 'react-transition-group';

import "./style.css"

function Project () {
  let object = projectArray.findIndex((Project) => Project.display === true)
  

  const [ focusProject, setFocusProject ] = useState(projectArray[`${object}`])
  const [inProp, setInProp] = useState(false);


  return(
   <>
   <Transition
      in={inProp}
      nodeRef={focusProject.nodeRef}
      timeout={500}
    >
      {state => (
        <ProjectFocus 
          focusProject = {focusProject}
          classNames={`fade fade-${state}`}
          inProp = {inProp}
        />
        )}
    </Transition>
    <ProjectList 
      focusProject = {focusProject}
      projectArray = {projectArray}
      setFocusProject = {setFocusProject}
      setInProp = {setInProp}
      inProp = {inProp}
    />
   </>
  )
}

export default Project;
