import React from 'react';

import AppBar from './components/AppBar/AppBar';
import BlackHalf from './components/Card/BlackHalf';
import WhiteHalf from './components/Card/WhiteHalf';

import temp from './images/temp.png';

import './App.css';

function App() {
	return (
		<div className="App">
			<header>
				<AppBar />
			</header>
			<BlackHalf image={temp} alt="intro" />
			<WhiteHalf />
		</div>
	);
}

export default App;
