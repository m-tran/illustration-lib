import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { ThemeProvider } from 'styled-components';
import theme from './Theme';

import App from './App';

// Opt-in to Webpack hot module replacement
if (module.hot) module.hot.accept();

/* eslint-disable no-undef */
ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
