import React from 'react';

import AppBar from './components/AppBar/index';
import IntroCard from './components/Card/IntroCard';
import BlueButton from './components/Button/BlueButton';

import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<AppBar />
			</header>
			<div className="App-ui">
				<div />
				<div>
					<IntroCard />
					<BlueButton theme="blue" link="#" text="Begin" />
				</div>
			</div>
		</div>
	);
}

export default App;
