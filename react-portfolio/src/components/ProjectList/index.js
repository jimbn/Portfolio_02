import React from "react";

function ProjectList (props) {
  const {projectArray = [], setFocusProject} = props;

  return(
    <div style={{ display: 'flex', justifyContent:'space-between', maxWidth:"75%"}}>
      {projectArray.map((project) => (
        <div style={{ position: "relative" }}
          onClick={() => setFocusProject(project)}>
          <img src={project.image} style={{ height: "200px", width:"200px", position: "absolute"}}/>
          <div style={{ position: "absolute", zIndex:"10", color:"red" }}>
            <h2>{project.name}</h2>
            <p>{project.language}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectList;