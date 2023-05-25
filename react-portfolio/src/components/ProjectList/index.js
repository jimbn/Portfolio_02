import React,  { useEffect }from "react";

function ProjectList (props) {
  const {projectArray = [], setFocusProject, setInProp, focusProject} = props;

  function changeDisplay (Project) {
    Project.display = !Project.display
  }

  

  function oldF (focusProject) {
    changeDisplay(focusProject);
    setInProp(false);
    console.log(focusProject.name +" "+focusProject.display);
  }



  function newF (Project) {
    setFocusProject(Project);
    changeDisplay(Project);
    setInProp(Project.display);
    console.log(Project.name +" "+Project.display)
  }

  function onClickEvent(focusProject, Project) {
    oldF(focusProject);
    setTimeout(newF(Project),50000)
  }

  return(
    <div style={{ display: 'flex', justifyContent:'space-between', maxWidth:"75%"}}>
      {projectArray.map((Project) => (
        <div style={{ position: "relative", cursor:"pointer" }}
          onClick={() => onClickEvent(focusProject, Project)}>
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