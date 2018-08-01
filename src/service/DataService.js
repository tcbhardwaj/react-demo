import React, { Component } from 'react';
import './DataService.css';

export default class DataService extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pageNumber: 1
        };
        
    }
    componentDidMount() {
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
            return (<tr className={row.id%2==0 ? 'odd' : 'even'}>
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
                <button style={{marginRight: "10px"}} 
                    className="btn btn-success" 
                    onClick={this.previousPageHandler.bind(this)} 
                    disabled={this.state.pageNumber <= 1}> previous page 
                </button>
                <button className="btn btn-success" 
                    onClick={this.nextPageHandler.bind(this)} 
                    disabled={this.state.pageNumber >= 4}> next page 
                </button>
                <p>Page number : {this.state.pageNumber}</p>
                <table align="center">
                    <thead className="header">
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </thead>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    {this.state.data.map((row, index) => {
                        return (<tr className={index%2==0 ? 'even' : 'odd'}>
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