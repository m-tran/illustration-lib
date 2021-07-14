import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { getColor } from '../../Theme';
import CanvasCard from '../Card/CanvasCard';
import SelectorCard from '../Card/SelectorCard';
import headItems from '../Objects/headItems';
import headHandler from '../../handlers/headHandler';
import bodyItems from '../Objects/bodyItems';
import bodyHandler from '../../handlers/bodyHandler';
import bottomItems from '../Objects/bottomItems';
import bottomHandler from '../../handlers/bottomHandler';

import './Canvas.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Create() {
	const headObj = (headHandler(headItems));
	const bodyObj = (bodyHandler(bodyItems));
	const bottomObj = (bottomHandler(bottomItems));

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 7000);
	}, []);

	return (
		<>
			{loading === false ? (
				<div className="container canvas">
					<CanvasCard
						key={headObj.imgKey}
						head={headObj.url}
						body={bodyObj.url}
						bottom={bottomObj.url}
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
			) : (
					<Loader className="container loader" type="Bars" color={getColor('blue')} height={80} width={80} />
				)}
		</>
	);
}
