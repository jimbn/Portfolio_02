import React from "react";

const currentYear = new Date().getFullYear();


function Footer () {


  return(
    <footer style={{ display: 'flex', justifyContent:'center' }}>
      <p>Jim Bui Nguyen &copy; {currentYear} </p>
    </footer>
  )
}

export default Footer;