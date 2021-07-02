import React from 'react';

import ImgCard from '../Card/ImageCard';
import SelectorCard from '../Card/SelectorCard';
import headItems from '../Arrays/HeadItems';
import headHandler from '../../handlers/headHandler';
import headStore from '../../store/headStore';

export default function Create() {
	const headArray = (headHandler(headItems));
	const selectedImg = headStore.getState().headUrl.headUrl;

	return (
		<div className="container">
			<ImgCard image={selectedImg} />
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
		</div>
	);
}
