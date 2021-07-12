import React, { useState, useEffect } from 'react';
import mergeImages from 'merge-images-v2';
import styled from 'styled-components';

import Button from '../Buttons/Button';
import bobWavy from '../../images/heads/wavy-bob.png';
import jacket from '../../images/body/jacket.png';
import pants from '../../images/bottom/pants.png';

import './ImageCard.css';

const ImgCtn = styled.div`
	margin: 2em;
	height: 75vh;
	width: 45vw;
	position: relative;
	@media screen and (max-width: 1024px) {
		margin: 1em;
		height: 30vh;
	}
`;

const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: contain;
	position: absolute;
`;

export default function CanvasCard({
	head, body, bottom,
}) {
	const headImg = { head };
	const bodyImg = { body };
	const bottomImg = { bottom };
	let headLink = headImg.head;
	let bodyLink = bodyImg.body;
	let bottomLink = bottomImg.bottom;

	const [headState, setHeadState] = useState(bobWavy);
	const [bodyState, setBodyState] = useState(jacket);
	const [bottomState, setBottomState] = useState(pants);

	useEffect(() => {
		setHeadState(headImg.head);
	}, [headImg]);

	useEffect(() => {
		setBodyState(bodyImg.body);
	}, [bodyImg]);

	useEffect(() => {
		setBottomState(bottomImg.bottom);
	}, [bottomImg]);

	if (!headLink) {
		headLink = bobWavy;
	} else {
		headLink = `/images/heads/${headState}`;
	}

	if (!bodyLink) {
		bodyLink = jacket;
	} else {
		bodyLink = `/images/body/${bodyState}`;
	}

	if (!bottomLink) {
		bottomLink = pants;
	} else {
		bottomLink = `/images/bottom/${bottomState}`;
	}

	const handleOnClick = async (x, y, z) => {
		const b64 = mergeImages([x, y, z]);
		document.querySelector('.download').href = await b64;
		Image.src = await b64;
	};

	return (
		<div>
			{/* eslint-disable-next-line */}
			<a onMouseDown={() => handleOnClick(headLink, bodyLink, bottomLink)} download="Open Il" className="download">
				<Button bgcolor="blue" color="white" text="download img" />
			</a>
			<div className="ImageCard">
				<ImgCtn>
					<Image
						src={headLink}
						className="selectedImg"
						alt="illustration"
					/>
					<Image
						src={bodyLink}
						className="selectedImg"
						alt="illustration"
					/>
					<Image
						src={bottomLink}
						className="selectedImg"
						alt="illustration"
					/>
				</ImgCtn>
			</div>
		</div>
	);
}
