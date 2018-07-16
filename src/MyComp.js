import React from "react";

class MyComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "1"
    };
  }
  mycompClick(e) {
    console.log(this.state);
    fetch("https://randomuser.me/api/?result=" + this.state.image)
      .then(result => {
        return result.json();
      })
      .then(data => {
        console.log("data:" + data.results.map);
      });
  }

  selectImage(event) {
    this.setState({
      image: event.target.value
    });
  }

  render() {
    return (
      <div>
        <select
          className="form-control"
          value={this.state.imageValue}
          onChange={this.selectImage.bind(this)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button
          className="btn btn-default"
          onClick={this.mycompClick.bind(this)}
        >
          My Comp
        </button>
      </div>
    );
  }
}

export default MyComp;
