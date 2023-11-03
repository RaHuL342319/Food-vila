import React from "react";
import ReactDOM from "react-dom/client";

// react element
const heading = (
  <h1 id="title" key="h1">
    Food Vila
  </h1>
);


const Title = () =>(
  <h1 id="title" key="h1">
    Food Vila
  </h1>
);

// React component
// Functional
// Class Based components
// Name of com[ponents with capital letter(naming convention, good practise to use)
// It is just a Normal function.
const HeaderComponent = () => {
  return (
    <div>
      {"Any JS code"}
      {Title()} {/*  or <Title /> both the way to running a react component */}
      {heading} {/*   // accessing the react element inside react component */}
      <h1>Welcome to Functional COmponents</h1>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

const HeaderComponent1 = () => (
  <div>
    
    <h1>Welcome to Functional COmponents</h1>
    <h2>This is a h2 tag</h2>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react element inside the root
// root.render(heading);  // accessing a react element
root.render(<HeaderComponent />); // accessing react functional component
