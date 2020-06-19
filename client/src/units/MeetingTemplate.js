import React, { Component } from 'react';
import './ESUstyle.css';

import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

class MeetingTemplate extends Component {
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
        <div className={this.props.name}>
            <Jumbotron fluid className="page-title">
                <Container>
                    <Row>
                        <Col>
                            <img className="header-img" src={this.props.logo} alt="Unit Logo" />
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <p>Meeting</p>
                    </Col>
                </Row>
            </Container>
            <br/>
        </div>
    );
  }
}

export default MeetingTemplate;