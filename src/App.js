import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Box from './components/Box';
import MyComp from './MyComp';
import Header from './components/Header';
import DataService from './service/DataService';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: false,
      msg: "this is second box!!!"
    }
  }

  handleClick() {
    this.setState({
      display: this.state.display ? false : true,
    })
  }
  render() {

    return (
      <div className="App">
        <Header />
        <Form />
        <MyComp />
        <Box header="My Header1" width="200px" display={true} >
          <p>this is first box</p>
        </Box>
        <Box header="My Header2" width="200px" display={true} />
        <Box header="My Header3" width="200px" display={true} />
        <div className="row">
          <div className="col-4">
            <button className="btn btn-info" onClick={this.handleClick.bind(this)}>{this.state.display ? "Hide Box" : "Show Box"}</button>
          </div>
          <div className="col-8">
            <Box header="My Header4" width="200px" display={this.state.display} message="this is fourth box" >
              <button className="btn btn-success">hello</button>
            </Box>

          </div>         
        </div>
        <DataService />
      </div>
    );
  }
}

export default App;
