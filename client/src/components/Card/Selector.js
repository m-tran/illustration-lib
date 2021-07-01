import React from 'react';

import SelectorCard from './SelectorCard';
import headItems from '../Arrays/HeadItems';
import imageHandler from '../../handlers/imageHandler';

import './Selector.css';

export default function Selector() {
	const headArray = (imageHandler(headItems));
	console.log(headArray.imageArray);
	console.log(headArray.imgUrl);

	return (
		<div className="Selector">
			<SelectorCard
				title="HEAD"
				items={headArray.imageArray}
			/>
			<SelectorCard
				title="BODY"
				// items={imageHandler(headItems.imageArray)}
			/>
			<SelectorCard
				title="LEGS"
				// items={imageHandler(headItems.imageArray)}
			/>
		</div>
	);
}
