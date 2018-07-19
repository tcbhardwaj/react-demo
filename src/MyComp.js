import React from "react";

class MyComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "1",
      imagePath: "https://randomuser.me/api/portraits/med/women/2.jpg"
    };
  }
  mycompClick(e) {
    console.log(this.state);
    fetch("https://randomuser.me/api/?result=" + this.state.image)
      .then(result => {
        //console.log("result:" + result);
        return result.json();
      })
      .then(data => {
        let pic = data.results.map(pic => {
          return pic.picture.medium;
        });
        this.setState({
          imagePath: pic
        });
        console.log(pic);
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
          Click to change Pic
        </button>
        <div>
          <img src={this.state.imagePath} alt={"pic not available"} />
        </div>
      </div>
    );
  }
}

export default MyComp;
