import React from "react";
const divWidth = {
  width: "500px",
  margin: "0 auto",
  textAlign: "left"
};
class Form extends React.Component {
  render() {
    return (
      <div style={divWidth}>
        <div className="form-group">
          <label htmlFor="name">Name</label>{" "}
          <input type="text" name="name" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="empid">Emp Id</label>{" "}
          <input type="text" name="empid" className="form-control" id="empid" />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </div>
    );
  }
}

export default Form;
