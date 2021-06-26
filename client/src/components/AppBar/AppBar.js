import React from 'react';
import './AppBar.css';

import styled from 'styled-components';
import { getColor } from '../../Theme';

const Blbg = styled.div`
	background-color: ${getColor('black')};
	color: ${getColor('white')};
`;

function AppBar() {
	return (
		<div className="AppBar">
			<Blbg className="AppBarBl">
				<p>openIL</p>
			</Blbg>
			<div className="AppBarWh">
				<ul>
					<li>create</li>
					<li>contact</li>
				</ul>
			</div>
		</div>
	);
}

export default AppBar;
