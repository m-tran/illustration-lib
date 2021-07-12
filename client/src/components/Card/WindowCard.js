import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getColor, getSize } from '../../Theme';

import Button from '../Buttons/Button';

const Window = styled.div`
	font-family: inherit;
	margin: 2em;
	border: 1px solid ${getColor('black')};
	background-color: ${getColor('white')};
	@media screen and (max-width: 1024px) {
		height: 50vh;
		width: 100%;
		border: none;
		margin: 0;
		overflow: hidden;
	}
`;

const BrowserTab = styled.div`
	padding: 0.25em 1em 0.25em 1em;
	background-color: ${getColor('black')};
	color: ${getColor('white')};
	@media screen and (max-width: 1024px) {
		display: none;
	}
`;

const BrowserBody = styled.div`
	font-size: ${getSize('md')};
	padding: 1em 4em 1em 0.5em;
`;

export default function WindowCard({
	title, body, bgcolor, color, text,
}) {
	return (
		<div>
			<Window>
				<BrowserTab>
					{title}
				</BrowserTab>
				<BrowserBody>
					{body}
				</BrowserBody>
				<Link to="/canvas">
					<Button bgcolor={bgcolor} color={color} text={text} />
				</Link>
			</Window>
		</div>
	);
}
