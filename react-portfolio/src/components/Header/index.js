import React from "react";
import NavHam from "../NavHam";
import './style.css'

function Header ({pages, setCurrentPage}) {

  return(
    <header style={{ display: 'flex'}}>
      <h1 className="highlight-header"> Jim Bui Nguyen</h1>
      <div className="nav" style={{ }}>
        <NavHam 
          pages={pages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </header>
  )  
}

export default Header;