import React, { Component } from 'react';
import './ESUstyle.css';

import Jumbotron from 'react-bootstrap/Jumbotron';

class Enterprise extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
        }
    }

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
        <div className="Enterprise">
            <Jumbotron fluid className="page-title">
                <br/>
                <h1><b>Enterprise</b></h1>
                <br/>
            </Jumbotron>
            <p>We're Enterprise!</p>
        </div>
    );
  }
}

export default Enterprise;