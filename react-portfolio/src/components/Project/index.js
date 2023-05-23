import React, { useState } from "react";
import ProjectFocus from "../ProjectFocus";
import ProjectList from "../ProjectList";
import projectArray from "../../assets/projectList/projectArray";


function Project () {
  const [ focusProject, setFocusProject ] = useState( projectArray[0] )

  return(
   <>
    <ProjectFocus 
      focusProject = {focusProject}
    />
    <ProjectList 
      projectArray = {projectArray}
      setFocusProject = {setFocusProject}
    />
   </>
  )
}

export default Project;
