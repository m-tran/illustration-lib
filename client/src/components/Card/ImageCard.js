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

export default function ImageCard() {
  return (
	<div className="ImageCard">
		<ImgCtn />
	</div>
  );
}
