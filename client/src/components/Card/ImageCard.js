import React from 'react';
import styled from 'styled-components';
import { getColor } from '../../Theme';

import './ImageCard.css';

const ImgCtn = styled.div`
	margin: 2em;
	border: 1px solid ${getColor('black')};
	height: 75vh;
	width: 45vw;
	position: relative;
`;

export default function ImageCard({ image }) {
	const img = { image };
	console.log(img.image);

	return (
		<div className="ImageCard">
			<ImgCtn>
				<img className="selectedImg" id="head" src={img.image} alt="" />
			</ImgCtn>
		</div>
	);
}
