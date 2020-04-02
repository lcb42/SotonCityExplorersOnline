import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Enterprise from './Enterprise.js';
import Kraken from './Kraken.js';

import logo from './logo.svg';
import './App.css';

export default function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/kraken">Kraken</Link>
						</li>
						<li>
							<Link to="/enterprise">Enterprise</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path="/enterprise">
						<Enterprise />
					</Route>
					<Route path="/kraken">
						<Kraken />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
