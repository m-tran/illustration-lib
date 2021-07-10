import React from 'react';
import mergeImages from 'merge-images-v2';
import styled from 'styled-components';
import { getColor } from '../../Theme';

import Button from '../Buttons/Button';
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

export default function CanvasCard({
	head, body, bottom,
}) {
	const headImg = { head };
	let headLink = headImg.head;
	const bodyImg = { body };
	let bodyLink = bodyImg.body;
	const bottomImg = { bottom };
	let bottomLink = bottomImg.bottom;

	if (!headLink) {
		headLink = bobWavy;
	} else {
		headLink = `/images/heads/${headLink.head}`;
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

	mergeImages([headLink, bodyLink, bottomLink])
		.then((b64) => {
			document.querySelector('.download').href = b64;
			document.querySelector('img').src = b64;
		});

	return (
		<div>
			{/* eslint-disable-next-line */}
			<a download="Open Il" className="download">
				<Button bgcolor="blue" color="white" text="download img" />
			</a>
			<div className="ImageCard">
				<ImgCtn>
					<img className="selectedImg" alt="illustration" />
				</ImgCtn>
			</div>
		</div>
	);
}
