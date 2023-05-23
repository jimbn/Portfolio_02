import React from "react";

const currentYear = new Date().getFullYear();


function Footer () {


  return(
    <footer style={{ display: 'flex', textAlign:'center', position: 'fixed', bottom: '0', left:'0', width:'100%' }}>
      <p>Jim Bui Nguyen &copy; {currentYear} </p>
    </footer>
  )
}

export default Footer;