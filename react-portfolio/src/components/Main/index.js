import React from "react";

import About from "../About";
import Project from "../Project";

function Main ({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'About':
        return <About/>
      case 'Project':
        return <Project/>
      default: 
      return <About/>
    }
  }

  return(
    <>
      <h2>{currentPage.name}</h2>
      <div>
        {renderPage()}
      </div>
    </>
  )
}

export default Main;