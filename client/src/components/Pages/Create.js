import React from 'react';

import ImgCard from '../Card/ImageCard';
import Selector from '../Card/Selector';

export default function Create({ image }) {
	return (
		<div className="container">
			<ImgCard image={image} />
			<Selector />
		</div>
	);
}
