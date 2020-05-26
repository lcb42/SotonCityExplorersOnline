import React, { Component } from 'react';
import './ESUstyle.css';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";

import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import UnitTemplate from './UnitTemplate';
import ChallengeTemplate from './ChallengeTemplate';
import LeaderboardTemplate from './LeaderboardTemplate';
import MeetingTemplate from './MeetingTemplate';

export default function UnitNavigation(props) {
	let match = useRouteMatch();
    return (
        <Router>
			<Switch>
				<Route path={`${match.path}/challenges`}>
					<ChallengeTemplate name="challenges" name={props.name} logo={props.logo}/>
				</Route>
				<Route path={`${match.path}/leaderboard`}>
					<LeaderboardTemplate name="leaderboard" name={props.name} logo={props.logo}/>
				</Route>
				<Route path={`${match.path}/meetings`}>
					<MeetingTemplate name="meetings" name={props.name} logo={props.logo}/>
				</Route>
				<Route path="/">
					<UnitTemplate name={props.name} logo={props.logo} />
				</Route>
			</Switch>
		</Router>
    );
}