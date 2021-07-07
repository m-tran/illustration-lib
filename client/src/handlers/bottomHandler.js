import React, { useState } from 'react';
import axios from 'axios';

import 'react-alice-carousel/lib/alice-carousel.css';
import bottomReducer from '../reducers/bottomReducer';
import bottomStore from '../store/bottomStore';

export default function bottomHandler(images) {
	const handleDragStart = (e) => e.preventDefault();

	let imgArray = [];

	const [key, setKey] = useState('');
	const [link, setLink] = useState('');

	const handleOnClick = async (e) => {
		const action = {
			type: 'SELECTED',
			payload: e,
		};
		const newKey = bottomReducer(key, action);
		setKey(newKey);

		bottomStore.dispatch({
			type: 'SELECTED',
			payload: newKey,
		});

		const getSrc = (imgId) => (
			axios
				.get('/bottom', {
					params: {
						id: imgId,
					},
				})
				.then((res) => {
					const linkData = res.data;
					return linkData;
				})
				.catch((err) => {
					throw err;
				})

		);

		const imgId = newKey.bottomKey;
		const selectedSrc = await getSrc(imgId);

		setLink(selectedSrc);
	};

	if (images !== undefined) {
		imgArray = Object.entries(images).map((entry) => {
			const [objKey, value] = entry;
			return (
				<img
					src={value.url}
					alt={value.alt}
					key={objKey}
					role="presentation"
					onDragStart={handleDragStart}
					onClick={() => handleOnClick(objKey)}
				/>
			);
		});
	}

	console.log(link);

	const image = {
		imageArray: imgArray,
		imgKey: key.bottomKey,
		url: link,
		alt: key.bottomKey,
	};

	return (image);
}
