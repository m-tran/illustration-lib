import React from 'react';
import styled from 'styled-components';
import { getColor, getSize } from '../../Theme';

import '../../App.css';

const Title = styled.div`
	font-size: ${getSize('md')};
	background-color: ${getColor('black')};
	color: ${getColor('white')};
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Body = styled.div`
	padding-top: 4em;
`;

export default function About() {
	return (
		<div className="container about">
			<Title className="subcontainer">
				<h1>Illustrations should be open for everyone.</h1>
			</Title>
			<Body className="subbody">
				<div>
					<h1>About</h1>
				</div>
				<div>
					{/* eslint-disable-next-line */}
					<p>Open Illustration Library, or OpenIL for short, was created to provide free illustrations for everyone. No matter where you are, the visual language is a powerful tool to tell your story with a human touch. With so many different stories out there, OpenIL was created with the intent to create minimal, diverse humans.</p>
					<br />
					{/* eslint-disable-next-line */}
					<p>Interested? Contact us if you have an illustration in mind. OpenIL is open for everyone.</p>
				</div>
			</Body>
		</div>
	);
}
