import React from 'react';

import ImgCard from '../Card/ImageCard';
import SelectorCard from '../Card/SelectorCard';

import headItems from '../Arrays/HeadItems';
import headHandler from '../../handlers/headHandler';
import headStore from '../../store/headStore';

import bodyItems from '../Arrays/bodyItems';
import bodyHandler from '../../handlers/bodyHandler';
import bodyStore from '../../store/bodyStore';

import bottomItems from '../Arrays/bottomItems';
import bottomHandler from '../../handlers/bottomHandler';
import bottomStore from '../../store/bottomStore';

export default function Create() {
	const headArray = (headHandler(headItems));
	const selectedHead = headStore.getState().headUrl.headUrl;

	const bodyArray = (bodyHandler(bodyItems));
	const selectedBody = bodyStore.getState().bodyUrl.bodyUrl;

	const bottomArray = (bottomHandler(bottomItems));
	const selectedBottom = bottomStore.getState().bottomUrl.bottomUrl;

	return (
		<div className="container">
			<ImgCard
				head={selectedHead}
				body={selectedBody}
				legs={selectedBottom}
			/>
			<div className="Selector">
				<SelectorCard
					title="HEAD"
					items={headArray.imageArray}
				/>
				<SelectorCard
					title="BODY"
					items={bodyArray.imageArray}
				/>
				<SelectorCard
					title="LEGS"
					items={bottomArray.imageArray}
				/>
			</div>
		</div>
	);
}
