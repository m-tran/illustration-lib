import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { getColor } from '../../Theme';

import './Card.css';

const BgCard = styled.div`
	background-color: ${getColor('black')};
	height: 100%;
	width: 100%;
`;

export default function BlackCard({ image, alt }) {
  return (
	<div>
		<BgCard>
			<img src={image} alt={alt} />
		</BgCard>
	</div>
  );
}

BlackCard.propTypes = {
	image: PropTypes.string,
	alt: PropTypes.string,
};

BlackCard.defaultProps = {
	image: PropTypes.string,
	alt: PropTypes.string,
};
