import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Box from './components/Box';

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
        <Form />
        
        <Box header="My Header1" width="200px" display={true} message="this is first box" />
        <Box header="My Header2" width="200px" display={true} message={this.state.msg} />
        <Box header="My Header3" width="200px" display={true} message="this is third box" />
        <div className="row">
          <div className="col-4">
          <button className="btn btn-info" onClick={this.handleClick.bind(this)}>{this.state.display ? "Hide Box" : "Show Box"}</button>
          </div>
          <div className="col-8">
            <Box header="My Header4" width="300px" display={this.state.display} message="this is fourth box" >
            <button className="btn btn-success">hello</button>
            </Box>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
