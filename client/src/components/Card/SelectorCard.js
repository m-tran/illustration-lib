import React from 'react';
import styled from 'styled-components';
import { getColor, getSize } from '../../Theme';

import Gallery from '../Carousel/Gallery';

const Window = styled.div`
	font-family: inherit;
	margin: 2em;
	border: 1px solid ${getColor('black')};
	background-color: ${getColor('white')};
	max-width: 654px;
`;

const BrowserTab = styled.div`
	padding: 0.25em 1em 0.25em 1em;
	background-color: ${getColor('black')};
	color: ${getColor('white')};
`;

const BrowserBody = styled.div`
	font-size: ${getSize('md')};
	padding: 1em;
	max-width: 654px;
	display: flex;
`;

export default function SelectorCard({
	title, items,
}) {
	return (
		<div>
			<Window>
				<BrowserTab>
					{title}
				</BrowserTab>
				<BrowserBody>
					<Gallery items={items} />
				</BrowserBody>
			</Window>
		</div>
	);
}
