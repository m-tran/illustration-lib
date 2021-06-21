import React from 'react';
import styled from 'styled-components';

import { getColor, getSize } from '../../Theme';

const Btn = styled.button`
	font-family: inherit;
	font-size: ${getSize('sm')};
	margin: 1em;
	padding: 0.25em 1em;
	border: none;

	/* Color the background and text with theme */
	background-color: ${getColor('blue')};
	color: ${getColor('white')};
`;

export default function BlueButton({ link, text }) {
	return (
		<div>
			<Btn onClick={link}>
				{text}
			</Btn>
		</div>
	);
}
