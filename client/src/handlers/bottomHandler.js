import React, { useState } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import bottomReducer from '../reducers/bottomReducer';
import bottomStore from '../store/bottomStore';

const handleDragStart = (e) => e.preventDefault();

export default function bottomHandler(images) {
	let imgArray = [];

	const [url, setUrl] = useState('');

	const handleOnClick = (e) => {
		const action = {
			type: 'SELECTED',
			payload: e,
		};
		const newUrl = bottomReducer(url, action);
		setUrl(newUrl);

		bottomStore.dispatch({
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
