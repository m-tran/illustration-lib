import React from 'react';
import styled from 'styled-components';
import { getColor, getSize } from '../../Theme';

import Button from '../Button';

const Window = styled.div`
	font-family: inherit;
	margin: 2em;
	border: 1px solid ${getColor('black')};
	background-color: ${getColor('white')};
`;

const BrowserTab = styled.div`
	padding: 0.25em 1em 0.25em 1em;
	background-color: ${getColor('black')};
	color: ${getColor('white')};
`;

const BrowserBody = styled.div`
	font-size: ${getSize('md')};
	padding: 1em 4em 1em 0.5em;
`;

export default function WindowCard({
	title, body, bgcolor, color, link, text,
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
				<Button bgcolor={bgcolor} color={color} link={link} text={text} />
			</Window>
		</div>
	);
}
