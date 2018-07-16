import React from "react";
const divWidth = {
  width: "500px",
  margin: "0 auto",
  textAlign: "left"
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
  }

  handleClick(event) {
    console.log(this.state);
  }
  updateName(e) {
    this.setState({
      name: e.target.value
    });
  }
  updateEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  render() {
    return (
      <div style={divWidth}>
        <div className="form-group">
          <label htmlFor="name">Name</label>{" "}
          <input
            type="text"
            name="name"            
            onChange={this.updateName.bind(this)}
            className="form-control"
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="empid">E-mail</label>{" "}
          <input
            type="text"
            name="empid"
            onChange={this.updateEmail.bind(this)}
            className="form-control"
            id="empid"
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"
          onClick={this.handleClick.bind(this)}
        >
          Submit
        </button>
      </div>
    );
  }

  
}

export default Form;
