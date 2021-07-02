import React, { useState } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import headReducer from '../reducers/headReducer';
import headStore from '../store/headStore';

const handleDragStart = (e) => e.preventDefault();

export default function headHandler(images) {
	let imgArray = [];

	const [url, setUrl] = useState('');

	const handleOnClick = (e) => {
		const action = {
			type: 'SELECTED',
			payload: e,
		};
		const newUrl = headReducer(url, action);
		setUrl(newUrl);

		headStore.dispatch({
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
