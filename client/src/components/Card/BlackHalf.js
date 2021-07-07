import React from 'react';
import styled from 'styled-components';
import { getColor } from '../../Theme';

import './BlackHalf.css';

const BgCard = styled.div`
	background-color: ${getColor('black')};
	height: 100%;
	width: 100%;
`;

const BlueBox = styled.div`
	background-color: ${getColor('blue')};
	width: 80%;
	height: 40%;
	position: absolute;
	z-index: 99;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export default function BlackHalf({ image, alt }) {
	return (
		<div className="BlackHalf">
			<BgCard>
				<div className="WhiteCard">
					<div className="imgCtn">
						<img className="imgFit" src={image} alt={alt} />
					</div>
					<BlueBox className="blueBox" />
				</div>
			</BgCard>
		</div>
	);
}
