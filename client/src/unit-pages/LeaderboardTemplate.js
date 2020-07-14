import React, { Component } from 'react';
import './UnitPageStyle.css';

import { Container, Row, Col, Navbar, Button } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';

class LeaderboardTemplate extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
        }
    }

  render() {
    const columns = [{
      dataField: 'member-name',
      text: 'Explorer'
    }, {
      dataField: 'activities-score',
      text: 'Activities Score'
    }, {
      dataField: 'meeting-attendance',
      text: 'Meeting Attendance'
    },{
      dataField: 'overall-score',
      text: 'Score'
    }];

    return (
        <div className={this.props.name}>
            <Navbar className="title-bar">
              <Button variant='outline-primary'>Challenges Icon</Button>
              <Button variant='outline-primary'>Leaderboard Icon</Button>
              <Button variant='outline-primary'>Meeting Icon</Button>
            </Navbar>
            <Container>
              <br/>
              <Row>
                <Col>
                  <h2>{this.props.unit} Leaderboard</h2>
                </Col>
              </Row>
              <br/><br/>
              <Row>
                <Col>
                  <BootstrapTable keyField='member-name' data="" columns={columns} />
                </Col>
              </Row>
            </Container>
            <br/>
        </div>
    );
  }
}

export default LeaderboardTemplate;