import React from 'react';

import AppBar from './components/AppBar/AppBar';
import IntroCard from './components/Card/IntroCard';
import BlueButton from './components/Button/BlueButton';

import './App.css';
import BlackCard from './components/Card/BlackCard';

function App() {
	return (
		<div className="App">
			<header>
				<AppBar />
			</header>
			<BlackCard />
			<div>
				<IntroCard />
				<BlueButton theme="blue" link="#" text="Begin" />
			</div>
		</div>
	);
}

export default App;
