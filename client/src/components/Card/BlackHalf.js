import React from 'react';
import styled from 'styled-components';
import { getColor } from '../../Theme';

import './Card.css';
import './BlackHalf.css';

const BgCard = styled.div`
	background-color: ${getColor('black')};
	height: 100%;
	width: 100%;
`;

export default function BlackHalf({ image, alt }) {
  return (
	<div className="BlackHalf">
		<BgCard>
			<div className="WhiteCard">
				<div className="imgCtn">
					<img src={image} alt={alt} />
				</div>
			</div>
		</BgCard>
	</div>
  );
}
