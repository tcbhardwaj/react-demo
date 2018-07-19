import React from "react";
import ReactDOM from "react-dom";
import MyComp from "./MyComp";
import Form from "/src/Form";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <MyComp />
      <hr />
      <h4>Form component</h4>
      <Form />
    </div>
  );
}

var mydiv = document.getElementById("root");
ReactDOM.render(<App />, mydiv);
