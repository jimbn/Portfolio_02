import React, {useState}from "react";


function ProjectList (props) {
  const {projectArray = [], setFocusProject} = props;

 
  const duration = 1000; // ms
  const delay = 500; // ms

  const animStr = () => `fadeIn ${duration}ms ease-out ${delay}ms forwards`;


  return(
    <div style={{ display: 'flex', justifyContent:'space-between', maxWidth:"75%"}}>
      {projectArray.map((Project) => (
        <div style={{ position: "relative", cursor:"pointer" }}
          onClick={() => setFocusProject(Project)}>
          <img src={Project.image} style={{ height: "200px", width:"200px", position: "absolute"}}/>
          <div style={{ position: "absolute", zIndex:"10", color:"rgba(17,100,102,1)", textShadow:"0 0 3px white" }}>
            <h2>{Project.name}</h2>
            <p>{Project.language}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectList;