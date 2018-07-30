import React, { Component } from 'react';

export default class DataService extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }

    dataHandler(event) {
        fetch("https://reqres.in/api/users?page=1")
        .then(result => {
            return result.json();
        })
        .then(json => {
            console.log('service data:', json.data[0]);
        })
    }

    render() {
        return(
            <div>
                <button className="btn btn-success" onClick={this.dataHandler.bind(this)}> Click to get data</button>
            </div>
        );
    }
}