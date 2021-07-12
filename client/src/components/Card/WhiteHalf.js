import React from 'react';
import styled from 'styled-components';
import { getColor } from '../../Theme';

import WindowCard from './WindowCard';

const BgCard = styled.div`
	background-color: ${getColor('white')};
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
`;

export default function WhiteHalf() {
	return (
		<div className="WhiteHalf">
			<BgCard>
				<WindowCard bgcolor="blue" color="white" title="openIL" body="(open source) illustration library" link="#" text="begin ->" />
			</BgCard>
		</div>
	);
}
