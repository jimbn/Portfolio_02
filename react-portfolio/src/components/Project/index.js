import React from "react";
import projectArray from "../../assets/projectList/projectArray";

function Project () {
  return(
    <div style={{ display: 'flex', justifyContent:'space-between', maxWidth:"75%"}}>
      {projectArray.map((project) => (
        <div style={{ position: "relative" }}>
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

export default Project;
