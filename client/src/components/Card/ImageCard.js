import React from 'react';
import styled from 'styled-components';
import { getColor } from '../../Theme';

import bobWavy from '../../images/heads/wavy-bob.png';
import jacket from '../../images/body/jacket.png';
import pants from '../../images/bottom/pants.png';


import './ImageCard.css';

const ImgCtn = styled.div`
	margin: 2em;
	border: 1px solid ${getColor('black')};
	height: 75vh;
	width: 45vw;
	position: relative;
`;

export default function ImageCard({ head, body, legs }) {
	const headImg = { head };
	const bodyImg = { body };
	const legsImg = { legs };

	if (headImg.head === undefined) {
		headImg.head = bobWavy;
	}

	console.log(headImg);

	if (bodyImg.body === undefined) {
		bodyImg.body = jacket;
	}

	if (legsImg.legs === undefined) {
		legsImg.legs = pants;
	}

	return (
		<div className="ImageCard">
			<ImgCtn>
				<img className="selectedImg" id="head" src={headImg.head} alt="head" />
				<img className="selectedImg" id="body" src={bodyImg.body} alt="body" />
				<img className="selectedImg" id="legs" src={legsImg.legs} alt="legs" />
			</ImgCtn>
		</div>
	);
}
