import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Opt-in to Webpack hot module replacement
if (module.hot) module.hot.accept();

/* eslint-disable no-undef */
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);
