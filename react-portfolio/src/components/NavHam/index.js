import React, {useState} from "react";
import Nav from "../Nav";
import "./style.css";

function NavHam ({pages, setCurrentPage}) {
  const [isOpen, setIsOpen] = useState(false);

  function clickEvent() {
    
    if(isOpen){
      setIsOpen(false)

    } else{
      setIsOpen(true)

    }
  };

  return (
    <>
      <div className={ `menu-btn ${!isOpen ? '' : 'open'}`} onClick={clickEvent}>
        <div className="hamburger"></div>
      </div>
      <Nav 
        pages={pages}
        setCurrentPage={setCurrentPage}
        isOpen = {isOpen}
        clickEvent={clickEvent}
      />
    </>
  )
}

export default NavHam;
