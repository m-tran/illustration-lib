import React, { useState } from 'react';
import axios from 'axios';

import 'react-alice-carousel/lib/alice-carousel.css';
import bodyReducer from '../reducers/bodyReducer';
import bodyStore from '../store/bodyStore';

export default function bodyHandler(images) {
	const handleDragStart = (e) => e.preventDefault();

	let imgArray = [];

	const [key, setKey] = useState('');
	const [link, setLink] = useState('');

	const handleOnClick = async (e) => {
		const action = {
			type: 'SELECTED',
			payload: e,
		};
		const newKey = bodyReducer(key, action);
		setKey(newKey);

		bodyStore.dispatch({
			type: 'SELECTED',
			payload: newKey,
		});

		const getSrc = (imgId) => (
			axios
				.get('/body', {
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

		const imgId = newKey.bodyKey;
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

	const image = {
		imageArray: imgArray,
		imgKey: key.bodyKey,
		url: link,
		alt: key.bodyKey,
	};

	return (image);
}
