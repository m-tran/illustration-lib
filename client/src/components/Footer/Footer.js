import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


import '../../App.css';
import './Footer.css';

export default function Footer() {
	return (
		<div className="footer">
			<div>
				<Link to="/">
					<h1>openIL</h1>
				</Link>
			</div>
			<div>
				<p>Create</p>
				<p>About</p>
				<br />
				<br />
				<p>A Project by Michelle Tran</p>
				<p>Based in San Francisco</p>
			</div>
			<div className="icons">
				<FontAwesomeIcon icon={faAt} className="icon" />
				<FontAwesomeIcon icon={faLinkedinIn} className="icon" />
				<FontAwesomeIcon icon={faGithub} className="icon" />
			</div>
		</div>
	);
}
