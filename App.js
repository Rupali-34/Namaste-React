import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },[ React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "My First React WebApp ❤"),
    React.createElement("h1", {}, "Hello from India"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello from Berhampur"),
    React.createElement("h1", {}, "Hello from Odisha"),
  ]),]
 
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello From React"
// );

console.log(parent); //return an object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //render method is converting the above object to h1 tag and putting it over heading
