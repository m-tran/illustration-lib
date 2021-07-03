import React, { useState } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import bodyReducer from '../reducers/bodyReducer';
import bodyStore from '../store/bodyStore';

const handleDragStart = (e) => e.preventDefault();

export default function bodyHandler(images) {
	let imgArray = [];

	const [url, setUrl] = useState('');

	const handleOnClick = (e) => {
		const action = {
			type: 'SELECTED',
			payload: e,
		};
		const newUrl = bodyReducer(url, action);
		setUrl(newUrl);

		bodyStore.dispatch({
			type: 'SELECTED',
			payload: newUrl,
		});
	};

	if (images !== undefined) {
		imgArray = images.map((imgURL) => (
			<img
				src={imgURL}
				alt=""
				key=""
				role="presentation"
				onDragStart={handleDragStart}
				onClick={() => handleOnClick(imgURL)}
			/>
		));
	}

	const image = {
		imageArray: imgArray,
		imgUrl: url,
	};

	return (image);
}
