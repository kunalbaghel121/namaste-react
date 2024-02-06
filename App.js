import React from "react";
import ReactDOM from "react-dom/client";

//React element

// const heading= React.createElement("h1",{id:"heading",},"namaste react")

//JSX

const heading=(<h1 id="heading" className="head" tabIndex="1">
    Namaste React using JSX
    </h1>)

//React functional component

//1st syntax
const Headingcomponent= () => {
    return <h1>Namaste react functional component</h1>
};

//2nd syntax
const Headingcomponent2= () => <h1>Namaste react functional component2</h1>

//3rd syntax
const Heading3= () => ( 
    <div id="container">
        <Headingcomponent2/>

        <h1 className="heading">namaste react functional component</h1>
    </div>
)

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading3/>) 

