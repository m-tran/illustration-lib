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
				<Link to="/canvas">
					<p>create</p>
				</Link>
				<Link to="/about">
					<p>about</p>
				</Link>
				<br />
				<br />
				<p>a project by Michelle Tran</p>
				<p>based in San Francisco</p>
			</div>
			<div className="icons">
				<a href="mailto:mptran0101@berkeley.edu">
					<FontAwesomeIcon icon={faAt} className="icon" />
				</a>
				<a href="https://www.linkedin.com/in/michelle-tran-282399b4/" target="blank">
					<FontAwesomeIcon icon={faLinkedinIn} className="icon" />
				</a>
				<a href="https://github.com/m-tran/illustration-lib" target="blank">
					<FontAwesomeIcon icon={faGithub} className="icon" />
				</a>
			</div>
		</div>
	);
}
