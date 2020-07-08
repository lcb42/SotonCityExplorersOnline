import React, { Component } from 'react';
import './UnitPageStyle.css';

import { Container, Row, Col, Card, Button, Navbar } from 'react-bootstrap';

class ChallengeTemplate extends Component {
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
            <Navbar className="title-bar"></Navbar>
            <br/>
            <Container>
                <Row>
                  <Col sm='6'>
                    <Card>
                      <Card.Img variant="top" src="http://via.placeholder.com/800x600" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm='6'>
                    <Card>
                      <Card.Img variant="top" src="http://via.placeholder.com/800x600" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <br/><hr/><br/>
                <Row>
                  <Col md="4">
                    <Card>
                      <Card.Img variant="top" src="http://via.placeholder.com/600x400" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card>
                      <Card.Img variant="top" src="http://via.placeholder.com/600x400" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card>
                      <Card.Img variant="top" src="http://via.placeholder.com/600x400" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card>
                      <Card.Img variant="top" src="http://via.placeholder.com/600x400" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card>
                      <Card.Img variant="top" src="http://via.placeholder.com/600x400" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
            </Container>
            <br/>
        </div>
    );
  }
}

export default ChallengeTemplate;