import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import Login from "./containers/Login";

import logo from './logo.svg';
import './App.css';

export default function App() {
	return (
		<Router>
			<div>
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand href="/">Scout-Master</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="/district_explorers">District</Nav.Link>
						<Nav.Link href="/kraken">Kraken</Nav.Link>
						<Nav.Link href="/enterprise">Enterprise</Nav.Link>
					</Nav>
					<Button variant="outline-info" href="/login">Login</Button>
				</Navbar>

				<Switch>
					<Route exact path="/login">
						<Login />
					</Route>
					{/*<Route path="/district_explorers">*/}
					{/*	<District />*/}
					{/*</Route>*/}
					{/*<Route path="/enterprise">*/}
					{/*	<Enterprise />*/}
					{/*</Route>*/}
					{/*<Route path="/kraken">*/}
					{/*	<Kraken />*/}
					{/*</Route>*/}
				</Switch>
			</div>
		</Router>
	);
}
