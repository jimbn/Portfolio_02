import React from "react";
import Nav from "../Nav";

function Header ({pages, setCurrentPage}) {

  return(
    <header style={{ display: 'flex', justifyContent:'space-between' }}>
      <h1> Jim Bui Nguyen</h1>
      <div>
        <Nav 
          pages={pages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </header>
  )  
}

export default Header;