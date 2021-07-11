import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';

import AppBar from './components/AppBar/AppBar';
import Footer from './components/Footer/Footer';
import Landing from './components/Pages/Landing';
import Create from './components/Pages/Create';
import Canvas from './components/Pages/Canvas';

import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<header>
					<AppBar />
				</header>
				<Switch>
					<Route exact path="/"><Landing /></Route>
					<Route path="/create"><Create /></Route>
					<Route path="/canvas"><Canvas /></Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
