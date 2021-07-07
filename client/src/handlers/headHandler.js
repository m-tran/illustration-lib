import React, { useState } from 'react';
import axios from 'axios';

import 'react-alice-carousel/lib/alice-carousel.css';
import headReducer from '../reducers/headReducer';
import headStore from '../store/headStore';

export default function headHandler(images) {
	const handleDragStart = (e) => e.preventDefault();

	let imgArray = [];

	const [key, setKey] = useState('');

	const handleOnClick = (e) => {
		const action = {
			type: 'SELECTED',
			payload: e,
		};
		const newKey = headReducer(key, action);
		setKey(newKey);

		headStore.dispatch({
			type: 'SELECTED',
			payload: newKey,
		});

		axios
			.get('/head', {
				params: {
					id: newKey.headKey,
				},
			})
			.then((res) => {
				console.log(res.data);
			})
			.catch((error) => {
				console.log(error.response.data);
				throw error;
			});
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
		imgKey: key.headKey,
	};

	return (image);
}
