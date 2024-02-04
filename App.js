import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from react"
// );


const parent = React.createElement("div",{id:"parent"},
React.createElement("h1",{id: "child"},
"Namaste react")); 

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);
