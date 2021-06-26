import React from 'react';

import AppBar from './components/AppBar/AppBar';
import BlackCard from './components/Card/BlackCard';
import WindowCard from './components/Card/WindowCard';

import './App.css';

function App() {
	return (
		<div className="App">
			<header>
				<AppBar />
			</header>
			<BlackCard />
			<div>
				<WindowCard bgcolor="blue" color="white" title="openIL" body="(open source) illustration library" link="#" text="Begin" />
			</div>
		</div>
	);
}

export default App;
