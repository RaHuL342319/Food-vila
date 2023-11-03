import React from 'react';
import ReactDOM from 'react-dom/client'
const heading = React.createElement("h1",{
    id: "title",
},
"Heading 1");

const heading2 = React.createElement("h1",{
    id: "title",
},
"Heading 1");

const container = React.createElement("div",{
    id:"container",
},
[heading,heading2]);


// passing a react element inside the root
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container);

