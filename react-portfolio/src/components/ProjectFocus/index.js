import React from "react";
import "./style.css"

function ProjectFocus({ focusProject, classNames }){
  const tools= focusProject.tools;
  const duration = 1000; // ms
  // const delay = 500; // ms

  const animStr = () => `fadeIn ${duration}ms ease-out `;

  return(
        <div  className={classNames} style={{display:"flex", padding:"1rem", animation: animStr()}}>
          <img style={{width: "400px", height:"350px"}} src={focusProject.image}/>
          <div style={{padding:"1rem"}}>
            <h2 style={{padding:"0 1rem"}}>{focusProject.name}</h2>
            <p style={{padding:"1rem"}}>{focusProject.description}</p>
            <h1>{focusProject.display}</h1>
            <ul style={{columnCount: "3", columnGap:"10px", padding:"0 1rem"}}>
              {tools.map((tool, i)=> (
                <li>{tool}</li>
              ))}
            </ul>
            
            <div style={{display:"flex", justifyContent:"space-evenly", paddingTop:"1rem"}}>
              <a href={focusProject.gitHub} >GitHub</a>
              <a href={focusProject.site}>Site</a>
            </div>
          </div>
        </div>
      
  )
}

export default ProjectFocus;