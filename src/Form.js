import React from "react";
const divWidth = {
  width: "500px",
  margin: "0 auto",
  "text-align": "left"
};
class Form extends React.Component {
  render() {
    return (
      <div style={divWidth}>
        <div class="form-group">
          <label for="name">Name</label>{" "}
          <input
            type="text"
            name="name"
            ngModel
            class="form-control"
            id="name"
          />
        </div>
        <div class="form-group">
          <label for="empid">Emp Id</label>{" "}
          <input
            type="text"
            name="empid"
            ngModel
            class="form-control"
            id="empid"
          />
        </div>
        <button type="submit" class="btn btn-success">
          Submit
        </button>
      </div>
    );
  }
}

export default Form;
