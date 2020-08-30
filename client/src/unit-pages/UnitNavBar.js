import React, { Component } from 'react';
import './UnitPageStyle.css';

import { Button, Navbar } from 'react-bootstrap';

class UnitNavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
        }
    }

  render() {
    return (
        <Navbar className="title-bar">
            <Button variant='outline-primary' href={'/' + this.props.unit + '/challenges'}>Challenges Icon</Button>
            <Button variant='outline-primary' href={'/' + this.props.unit + '/leaderboard'}>Leaderboard Icon</Button>
            <Button variant='outline-primary' href={'/' + this.props.unit + '/meetings'}>Meeting Icon</Button>
        </Navbar>
        );
    }
}

export default UnitNavBar;