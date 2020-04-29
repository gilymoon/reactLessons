import React from "react";
import "./index.scss";


const age = (date) =>
Math.floor(((new Date().getTime() - new Date(date)) / (24 * 3600 * 365 * 1000)))


function Greeting(props) {
  return (
    <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I'm ${age(props.birthDate)} years old`}
    </div>
  );
}

export default Greeting;