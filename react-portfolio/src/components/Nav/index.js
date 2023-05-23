import React from "react";
import "../NavHam/style.css";
import { clickEvent } from "../NavHam";

function Nav (props) {
  const {
    pages = [],
    setCurrentPage,
    isOpen,
    clickEvent
  } = props;

  return (
    <nav className={ `menu ${!isOpen ? '' : 'menu-open'}`} onClick={clickEvent}>
      <ul>
        {pages.map((Page) => (
          <li key={Page.name}>
            <span 
            onClick={() => setCurrentPage(Page)}
            >
              {Page.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default Nav;