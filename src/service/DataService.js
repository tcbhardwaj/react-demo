import React, { Component } from 'react';

export default class DataService extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pageNumber: 1
        };
        this.dataHandler();
    }

    dataHandler(event) {   
        console.log("in page number:", this.state.pageNumber);     
        fetch("https://reqres.in/api/users?page=" + this.state.pageNumber)
            .then(result => {
                return result.json();
            })
            .then(json => {
                this.setState({
                    data: json.data
                })
                console.log('service data:', this.state.data);                
            })
    }

    nextPageHandler(event) {        
        this.setState({
            pageNumber: this.state.pageNumber + 1
        }, this.dataHandler);                   
    }
    previousPageHandler(event) {       
        this.setState({
            pageNumber: this.state.pageNumber - 1
        }, this.dataHandler);        
        
    }

    rows = () => {
        this.state.data.map(row => {
            return (<tr>
                <td>{row.id}</td>
                <td>{row.first_name}</td>
                <td>{row.last_name}</td>
            </tr>
            )
        });
    }
    render() {
        return (
            <div>
                {/* <button className="btn btn-success" onClick={this.dataHandler.bind(this)}> Click to get data</button> */}
                <button style={{marginRight: "10px"}} className="btn btn-success" onClick={this.previousPageHandler.bind(this)} disabled={this.state.pageNumber <= 1}> previous page </button>
                <button className="btn btn-success" onClick={this.nextPageHandler.bind(this)} disabled={this.state.pageNumber >= 4}> next page </button>
                <p>Page number : {this.state.pageNumber}</p>
                <table align="center">
                    <thead>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </thead>
                    {this.state.data.map(row => {
                        return (<tr>
                            <td>{row.id}</td>
                            <td>{row.first_name}</td>
                            <td>{row.last_name}</td>
                        </tr>
                        )
                    })}
                </table>
            </div>
        );
    }
}