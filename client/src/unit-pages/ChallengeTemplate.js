import React, { Component } from 'react';
import './UnitPageStyle.css';

import { Container, Row, Col, Card, Button, Navbar } from 'react-bootstrap';
import UnitNavBar from './UnitNavBar';

class ChallengeTemplate extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
        }
    }

  componentDidMount() {}

  render() {
    return (
        <div className={this.props.name}>
            <UnitNavBar unit={this.props.unit}/>
            <br/>
            <Container>
              <Row>
                <ActivityCard unit={this.props.unit} name='test'/>
                <ActivityCard unit={this.props.unit} name='test'/>
              </Row>
              <br/><hr/><br/>
              <Row>                  
                <HistoricCard unit={this.props.unit} name='test'/>
                <HistoricCard unit={this.props.unit} name='test'/>
                <HistoricCard unit={this.props.unit} name='test'/>
                <HistoricCard unit={this.props.unit} name='test'/>
                <HistoricCard unit={this.props.unit} name='test'/>
              </Row>
            </Container>
            <br/>
        </div>
    );
  }
}

export default ChallengeTemplate;

const ActivityCard = props => {
  return (
    <Col sm='6'>
      <Card>
        <Card.Img variant="top" src="http://via.placeholder.com/800x600" />
        <Card.Body>
          <Card.Title>Challenge Title</Card.Title>
          <Card.Text>
            Quick summary of Challenge
          </Card.Text>
          <Button variant="primary" href={'/' + props.unit + '/challenge/' + props.name}>Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

const HistoricCard = props => {
  return (
    <Col md="4" className='historic-card'>
      <Card>
        <Card.Img variant="top" src="http://via.placeholder.com/600x400" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary" href={'/' + props.unit + '/challenge/' + props.name}>Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}