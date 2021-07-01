import React from 'react';
import styled from 'styled-components';
import { getColor } from '../../Theme';

import './ImageCard.css';

const ImgCtn = styled.div`
	margin: 2em;
	border: 1px solid ${getColor('black')};
	height: 75vh;
	width: 45vw;
`;

export default function ImageCard({ image }) {
  return (
	<div className="ImageCard">
		<ImgCtn>
			<img src={image} alt="" />
		</ImgCtn>
	</div>
  );
}
