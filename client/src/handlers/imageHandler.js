import React, { useState } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import imgReducer from '../reducers/imgReducer';

const handleDragStart = (e) => e.preventDefault();

export default function imageHandler(images) {
	let imgArray = [];

	const [url, setUrl] = useState('');

	const handleOnClick = (e) => {
		// setUrl(e);
		const action = {
			type: 'SELECTED',
			payload: {
				imgUrl: e,
			},
		};
		const newUrl = imgReducer(url, action);
		setUrl(newUrl);
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
