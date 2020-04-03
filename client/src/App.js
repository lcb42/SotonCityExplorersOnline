import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Enterprise from './Enterprise.js';
import Kraken from './Kraken.js';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import logo from './logo.svg';
import './App.css';

export default function App() {
	return (
		<Router>
			<div>
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand href="/">Navbar</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="/"> Home</Nav.Link>
						<Nav.Link href="/kraken">Kraken</Nav.Link>
						<Nav.Link href="/enterprise">Enterprise</Nav.Link>
					</Nav>
					<Button variant="outline-info">Login</Button>
				</Navbar>

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
