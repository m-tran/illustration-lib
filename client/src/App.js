import React from 'react';

import AppBar from './components/AppBar/AppBar';
import Landing from './components/Pages/Landing';

import './App.css';

function App() {
	return (
		<div className="App">
			<header>
				<AppBar />
			</header>
			<Landing />
		</div>
	);
}

export default App;
