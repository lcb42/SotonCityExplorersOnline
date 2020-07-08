import React, { Component } from 'react';
import './ESUstyle.css';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";

import UnitTemplate from './UnitTemplate';
import ChallengeTemplate from './../unit-pages/ChallengeTemplate';
import LeaderboardTemplate from './../unit-pages/LeaderboardTemplate';
import MeetingTemplate from './../unit-pages/MeetingTemplate';

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