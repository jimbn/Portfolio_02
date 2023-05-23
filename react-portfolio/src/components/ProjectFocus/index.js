import React from "react";

function ProjectFocus({ focusProject }){
  const tools= focusProject.tools;

  return(
    <div style={{display:"flex"}}>
      <img style={{width: "400px", height:"300px"}} src={focusProject.image}/>
      <div>
        <h2>{focusProject.name}</h2>
        <p>{focusProject.description}</p>
        <ul style={{columnCount: "3", columnGap:"10px"}}>
          {tools.map((tool, i)=> (
            <li>{tool}</li>
          ))}
        </ul>
        <div>
          <a href={focusProject.gitHub}>GitHub</a>
          <a href={focusProject.site}>Site</a>
        </div>
      </div>
    </div>
    )
}

export default ProjectFocus;