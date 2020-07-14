import React, { Component } from 'react';
import './UnitPageStyle.css';

import { Container, Row, Col, Navbar, Button, Card } from 'react-bootstrap';

class MeetingTemplate extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
        }
    }

  render() {
    return (
        <div className={this.props.name}>
            <Navbar className="title-bar">
                <Button variant='outline-primary'>Challenges Icon</Button>
                <Button variant='outline-primary'>Leaderboard Icon</Button>
                <Button variant='outline-primary'>Meeting Icon</Button>
            </Navbar>
            <Container>
              <br/><br/>
              <Row>
                  <Col>
                      <h2>{this.props.unit} Meetings</h2>
                  </Col>
              </Row>
              <br/><br/>
              <Row>
                  <MeetingCard/>
              </Row>
              <br/><hr/><br/>
              <Row>
                <FutureCard/>
                <FutureCard/>
                <FutureCard/>
                <FutureCard/>
                <FutureCard/>
              </Row>
            </Container>
            <br/>
        </div>
    );
  }
}

export default MeetingTemplate;

const MeetingCard = () => {
    return (
      <Col>
        <Card>
          <Card.Img variant="top" src="http://via.placeholder.com/1600x300" />
          <Card.Body>
            <Row>
              <Col>
              <Card.Title className="float-left">Meeting Title</Card.Title>
              </Col>
              <Col>
                <Card.Title className="float-right">
                  12/03/2020
                </Card.Title>
              </Col>
            </Row>
            <Card.Text>
              Quick summary of the meeting.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    )
  }
  
  const FutureCard = () => {
    return (
      <Col sm="6">
          <Card>
            <Card.Img variant="top" src="http://via.placeholder.com/600x150" />
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title className="float-left">Card Title</Card.Title>
                </Col>
                <Col>
                  <Card.Title className="float-right">
                    24/02/2020
                  </Card.Title>
                </Col>
              </Row>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <br/>
      </Col>
    )
  }