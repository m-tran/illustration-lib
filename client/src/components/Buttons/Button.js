import React from 'react';
import styled from 'styled-components';

import { getColor, getSize } from '../../Theme';

const Btn = styled.button`
	font-family: inherit;
	font-size: ${getSize('sm')};
	margin: 1em;
	padding: 0.25em 1em;
	border: none;
	background-color: ${(props) => (getColor(props.bgcolor))};
	color: ${(props) => (getColor(props.color))};
`;

export default function Button({
	bgcolor, color, text,
}) {
	return (
		<div>
			<Btn bgcolor={bgcolor} color={color}>
				{text}
			</Btn>
		</div>
	);
}
