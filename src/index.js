import React from "react";
import ReactDOM from "react-dom";
import MyComp from "./MyComp";
import Form from "/src/Form";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <hr />
      <MyComp />
      <hr />
      <Form />      
    </div>
  );
}

var mydiv = document.getElementById("root");
ReactDOM.render(<App />, mydiv);
