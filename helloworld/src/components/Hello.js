// JSX version of Hello component
// import React from "react";

// const Hello = () => {
//   return (
//     <div className ="dummyClass">
//       <h1>Hello Bhavya </h1>
//     </div>
//   );
// };
// export default Hello;

// without  JSX version of Hello component
import React from "react";

const Hello = () => {
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello Bhavya")
  );
};
export default Hello;
