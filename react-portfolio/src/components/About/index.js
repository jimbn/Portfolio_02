import React from "react";
import myPic from "../../assets/images/profile-pic/myPic.jpg"

function About () {
  return(
    <div style={{display:"flex"}}>
      <img style={{ width: "200px", height: "200px", borderRadius:"1000px" }}src ={myPic}/>
      <div>
        <p>
          I'm a driven full stack developer focusing on MERN stack. Recently completed and earned a certificate
          in Full Stack Web Development from University of California, Berkeley coding bootcamp. With my experience,
          I enjoy learning and apply new concepts and knowledge to create and improve on various web
          applications that implements CRUD.
        </p>
        <p>
          As a backstory, I graduated from University of California, Irvine with a bachelor degree in
          Biological Science. I have previously work in retail, food services, and commercial realestate. 
          With my past experiences, it built my problem solving skills and being able to work independently
          and in a team environment. 
        </p>
        <p>
          I'm a driven full stack developer focusing on MERN stack. Recently completed and earned a certificate
          in Full Stack Web Development from University of California, Berkeley coding bootcamp. With my experience,
          I enjoy learning and apply new concepts and knowledge to create and improve on various web
          applications that implements CRUD.
        </p>
        <p>
          As a backstory, I graduated from University of California, Irvine with a bachelor degree in
          Biological Science. I have previously work in retail, food services, and commercial realestate. 
          With my past experiences, it built my problem solving skills and being able to work independently
          and in a team environment. 
        </p>
      </div>
    </div>
  )
}

export default About;