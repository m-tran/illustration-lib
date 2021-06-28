import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
  } from 'react-router-dom';

import AppBar from './components/AppBar/AppBar';
import Landing from './components/Pages/Landing';
import Create from './components/Pages/Create';

import './App.css';

function App() {
	return (
		<div className="App">
			<header>
				<AppBar />
			</header>
			<Router>
				<Switch>
					<Route exact path="/"><Landing /></Route>
					<Route path="/create"><Create /></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
