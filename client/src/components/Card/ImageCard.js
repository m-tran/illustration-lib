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

export default function ImageCard({
	head, headAlt, body, legs,
}) {
	const headImg = { head };
	let headLink = headImg.head;
	const bodyImg = { body };
	const legsImg = { legs };

	const headCAlt = { headAlt };

	if (headLink !== undefined) {
		headLink = `/images/heads/${headImg.head}`;
	} else {
		headLink = bobWavy;
	}

	if (headCAlt.headAlt === undefined) {
		headCAlt.headAlt = 'bobWavy';
	}

	if (bodyImg.body === undefined) {
		bodyImg.body = jacket;
	}

	if (legsImg.legs === undefined) {
		legsImg.legs = pants;
	}

	return (
		<div className="ImageCard">
			<ImgCtn>
				<img className="selectedImg" id="head" src={headLink} alt={headCAlt.headAlt} />
				<img className="selectedImg" id="body" src={bodyImg.body} alt="body" />
				<img className="selectedImg" id="legs" src={legsImg.legs} alt="legs" />
			</ImgCtn>
		</div>
	);
}
