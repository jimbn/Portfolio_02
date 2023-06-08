import React, {useState, useEffect} from "react";
import "./style.css";

function Clock() {

  // Get the local time using JS
  let date = new Date;
  // let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  // let seconds = date.getSeconds();

  // console.log(date);

  // Create an object with each hand and it's angle in degrees
  let hourAngle = (hours * 30) + (minutes / 2);
  // let secondAngle = (seconds *6);

  const [time, setTime] = useState(hourAngle);

  useEffect(() => {
    let hourHand = document.querySelector('.hours');
    console.log(hourHand);
    hourHand.style.webkitTransform = 'rotateZ('+ time +'deg)';
    hourHand.style.transform = 'rotateZ('+ time +'deg)';
    
  })


  function newTime (){
      // Get the local time using JS
    let newDate = new Date;
    // var seconds = newDate.getSeconds();
    let newMinutes = newDate.getMinutes();
    let newHours = newDate.getHours();

    newTime = (newHours * 30) + (newMinutes / 2)
    // let newTime = (seconds *6);

    setTime(newTime);
  };

  setInterval(newTime, 1000);

  return(
    <div className="background-clock">
      <div className="clock">
        <div className="hours-container">
          <div className="hours"></div>
        </div>
      </div>
    </div>
  );

};

export default Clock;