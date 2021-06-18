import React from 'react';
import styled from 'styled-components';

export default function Button({ link, text }) {
	const Btn = styled.button`
		font-family: inherit;
		font-size: 1em;
		margin: 1em;
		padding: 0.25em 1em;
		border: none;
		transition: 0.5s all ease-out;
	`;

	return (
		<div>
			<Btn onClick={link}>
				{text}
			</Btn>
		</div>
	);
}
