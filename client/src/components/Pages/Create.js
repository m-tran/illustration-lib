import React from 'react';
import ImgCard from '../Card/ImageCard';
import SelectorCard from '../Card/SelectorCard';
import headItems from '../Objects/headItems';
import headHandler from '../../handlers/headHandler';
import bodyItems from '../Objects/bodyItems';
import bodyHandler from '../../handlers/bodyHandler';
import bottomItems from '../Objects/bottomItems';
import bottomHandler from '../../handlers/bottomHandler';

export default function Create() {
	const headObj = (headHandler(headItems));
	const bodyObj = (bodyHandler(bodyItems));
	const bottomObj = (bottomHandler(bottomItems));

	return (
		<div className="container">
			<ImgCard
				key={headObj.imgKey}
				head={headObj.url}
				headAlt={headObj.alt}
				body={bodyObj.url}
				bodyAlt={bodyObj.alt}
				bottom={bottomObj.url}
				bottomAlt={bottomObj.alt}
			/>
			<div className="Selector">
				<SelectorCard
					title="HEAD"
					items={headObj.imageArray}
				/>
				<SelectorCard
					title="BODY"
					items={bodyObj.imageArray}
				/>
				<SelectorCard
					title="LEGS"
					items={bottomObj.imageArray}
				/>
			</div>
		</div>
	);
}
