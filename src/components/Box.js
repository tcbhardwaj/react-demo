import React from 'react'

export default class Box extends React.Component {

    

    constructor(props) {
        super(props);
        //this.state = {};
        
    }

    

    render() {
        let hederStyle = {
            background: "lightgray",
            textAlign: "left",
            bold: "true",
            paddingLeft: "5px"
        }
        let show = this.props.display === true ? "inline-grid" : "none";

        let dialogStyle = {
            width: this.props.width,
            display: show,
            boxShadow: "5px 8px gray",
            margin: "10px"            
        }
        return(
            <div style={dialogStyle} >
                <div style={hederStyle}><h6>{this.props.header}</h6></div>            
                <div class="modal-body">                    
                    <p>
                        {this.props.message} 
                    </p>
                </div>
            </div>
        );
    }
}