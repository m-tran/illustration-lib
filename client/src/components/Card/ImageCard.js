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

const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: contain;
	position: absolute;
`;

export default function ImageCard({
	head, headAlt, body, bodyAlt, bottom, bottomAlt,
}) {
	const headImg = { head };
	let headLink = headImg.head;
	const bodyImg = { body };
	let bodyLink = bodyImg.body;
	const bottomImg = { bottom };
	let bottomLink = bottomImg.bottom;
	const heAlt = { headAlt };
	const bdAlt = { bodyAlt };
	const btAlt = { bottomAlt };

	if (!headLink) {
		headLink = bobWavy;
	} else {
		headLink = `/images/heads/${headImg.head}`;
	}

	if (!bodyLink) {
		bodyLink = jacket;
	} else {
		bodyLink = `/images/body/${bodyImg.body}`;
	}

	if (!bottomLink) {
		bottomLink = pants;
	} else {
		bottomLink = `/images/bottom/${bottomImg.bottom}`;
	}

	if (heAlt.headAlt === undefined) {
		heAlt.headAlt = 'bobWavy';
	}

	if (bdAlt.bodyAlt === undefined) {
		bdAlt.bodyAlt = 'Jacket';
	}

	if (btAlt.bottomAlt === undefined) {
		btAlt.bottomAlt = 'Pants';
	}

	return (
		<div className="ImageCard">
			<ImgCtn>
				<Image
					className="selectedImg"
					id="head"
					src={headLink}
					alt={heAlt.headAlt}
				/>
				<Image
					className="selectedImg"
					id="body"
					src={bodyLink}
					alt={bdAlt.bodyAlt}
				/>
				<Image
					className="selectedImg"
					id="legs"
					src={bottomLink}
					alt={btAlt.bottomAlt}
				/>
			</ImgCtn>
		</div>
	);
}
