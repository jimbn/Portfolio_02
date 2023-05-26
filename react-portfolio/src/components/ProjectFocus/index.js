import React from "react";
import styled, {keyframes} from 'styled-components';
import { fadeInLeft, fadeInRight } from 'react-animations'

import "./style.css"

function ProjectFocus({ focusProject, classNames }){

  const tools= focusProject.tools;

  let keyLeft = keyframes`${fadeInLeft}`;
  let keyRight = keyframes`${fadeInRight}`;

  let AnimateLeft = styled.div`animation: 2s ${keyLeft}`;
  let AnimateRight =styled.div`animation: 2s ${keyRight}`;


  return(
        <div  className={classNames} style={{display:"flex", padding:"1rem"}}>
          <AnimateLeft>
            <img style={{width: "400px", height:"350px"}} src={focusProject.image}/>
          </AnimateLeft>
          <AnimateRight>
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
          </AnimateRight>

        </div>
      
  )
}

export default ProjectFocus;