import React from "react";
import NavHam from "../NavHam";
import Nav from "../Nav";

function Header ({pages, setCurrentPage}) {

  return(
    <header style={{ display: 'flex'}}>
      <h1> Jim Bui Nguyen</h1>
      <div style={{ paddingLeft:"1rem"}}>
        <NavHam 
          pages={pages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </header>
  )  
}

export default Header;