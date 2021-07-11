import React from 'react';
import { Link } from 'react-router-dom';
import './AppBar.css';

function AppBar() {
	return (
		<div className="AppBar AppBarWh">
			<Link to="/">
				<p>openIL</p>
			</Link>
			<div>
				<ul>
					<Link to="/canvas">
						<li>create</li>
					</Link>
					<li>about</li>
				</ul>
			</div>
		</div>
	);
}

export default AppBar;
