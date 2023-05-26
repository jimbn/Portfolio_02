import React from "react";
import styled, {keyframes} from 'styled-components';
import { fadeInLeft, fadeInRight } from 'react-animations';

import './style.css'


function ProjectFocus({ focusProject, classNames }){

  const tools= focusProject.tools;

  let keyLeft = keyframes`${fadeInLeft}`;
  let keyRight = keyframes`${fadeInRight}`;

  let AnimateLeft = styled.div`animation: 2s ${keyLeft}`;
  let AnimateRight =styled.div`animation: 2s ${keyRight}`;


  return(
        <div  className="project-focus">
          <AnimateLeft>
            <img className="project-focus-img" src={focusProject.image}/>
          </AnimateLeft>
          <AnimateRight>
            <div className="project-focus-txt">
              <h2>{focusProject.name}</h2>
              <p>{focusProject.description}</p>
              <h1>{focusProject.display}</h1>
              <ul>
                {tools.map((tool, i)=> (
                  <li>{tool}</li>
                ))}
              </ul> 
              <div class="project-focus-hyper" >
                <a href={focusProject.gitHub} >GitHub</a>
                <a href={focusProject.site}>Site</a>
              </div>
            </div>
          </AnimateRight>

        </div>
      
  )
}

export default ProjectFocus;