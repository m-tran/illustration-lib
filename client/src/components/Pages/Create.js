import React from 'react';

import ImgCard from '../Card/ImageCard';
import SelectorCard from '../Card/SelectorCard';

import headItems from '../Objects/headItems';
import headHandler from '../../handlers/headHandler';

// import bodyItems from '../Objects/bodyItems';
// import bodyHandler from '../../handlers/bodyHandler';
// import bodyStore from '../../store/bodyStore';

// import bottomItems from '../Objects/bottomItems';
// import bottomHandler from '../../handlers/bottomHandler';
// import bottomStore from '../../store/bottomStore';

export default function Create() {
	const headObj = (headHandler(headItems));
	console.log(headObj.url);

	// const bodyArray = (bodyHandler(bodyItems));
	// const selectedBody = bodyStore.getState().bodyUrl.bodyUrl;

	// const bottomArray = (bottomHandler(bottomItems));
	// const selectedBottom = bottomStore.getState().bottomUrl.bottomUrl;

	return (
		<div className="container">
			<ImgCard
				head={headObj.url}
				headAlt={headObj.alt}
			/>
			<div className="Selector">
				<SelectorCard
					title="HEAD"
					items={headObj.imageArray}
				/>
				<SelectorCard
					title="BODY"
				// items={bodyArray.imageArray}
				/>
				<SelectorCard
					title="LEGS"
				// items={bottomArray.imageArray}
				/>
			</div>
		</div>
	);
}
