import React, { Component } from 'react';
import './UnitPageStyle.css';

import { Container, Row, Col, Card, Button, Navbar } from 'react-bootstrap';
import UnitNavBar from './UnitNavBar';

class Challenge extends Component {
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
                    <Col>
                        <h3 class="challenge-title">Challenge Title </h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4 class="float-left">Date Start</h4>
                    </Col>
                    <Col>
                        <h4 class="float-right">Date End</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Detailed description paragraph about challenge etc.</p>
                    </Col>
                </Row>
            </Container>
            <br/>
        </div>
    );
  }
}

export default Challenge;