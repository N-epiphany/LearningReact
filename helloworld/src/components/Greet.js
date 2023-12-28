// https://youtu.be/Cla1WwguArA?si=kRQCijL9o0b72_JU
// Greet.js
import React from "react";

// function Greet() {
//   return <h1>Hello Bhavya</h1>;
// }

// ES6 arrow syntax
const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroname}
      </h1>
      {props.children}
    </div>
  );
};
export default Greet;
