import React from "react";

function Nav (props) {
  const {
    pages = [],
    setCurrentPage,
  } = props;

  return (
    <nav>
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