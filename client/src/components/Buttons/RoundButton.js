import React from 'react';
import styled from 'styled-components';

import { getColor, getSize } from '../../Theme';

import './Buttons.css';

const RoundBtn = styled.button`
	display: flex;
	font-family: inherit;
	font-size: ${getSize('sm')};
	margin: 1em;
	padding: 0.25em;
	border: 1px solid ${(props) => (getColor(props.color))};
	border-radius: 50%;
	background-color: ${(props) => (getColor(props.bgcolor))};
`;

export default function RoundButton({
	bgcolor, image, onClick,
}) {
	return (
		<div>
			<RoundBtn bgcolor={bgcolor} onClick={onClick}>
				<img className="RoundBtnImg" src={image} alt="button" />
			</RoundBtn>
		</div>
	);
}
