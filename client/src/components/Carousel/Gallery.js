import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import RoundButton from '../Buttons/RoundButton';
import next from '../../images/next.png';
import prev from '../../images/prev.png';

import 'react-alice-carousel/lib/alice-carousel.css';
import './Gallery.css';

const responsive = {
	0: { items: 3 },
	568: { items: 3 },
	1024: { items: 3 },
};

export default function Gallery({ items }) {
	const Arr = { items };

	const thumbItems = (itemsArr, [setThumbIndex, setThumbAnimation]) => itemsArr.map((item, i) => (
		<div className="thumb" role="presentation" onKeyDown="" onClick={() => [setThumbIndex(i), setThumbAnimation(true)]}>
			{item}
		</div>
	));

	const [thumbIndex, setThumbIndex] = useState(0);
	const [thumbAnimation, setThumbAnimation] = useState(false);
	const [thumbs] = useState(thumbItems(Arr.items, [setThumbIndex, setThumbAnimation]));

	const slideNext = () => {
		if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
			setThumbAnimation(true);
			setThumbIndex(thumbIndex + 1);
		}
	};

	const slidePrev = () => {
		if (!thumbAnimation && thumbIndex > 0) {
			setThumbAnimation(true);
			setThumbIndex(thumbIndex - 1);
		}
	};

	const syncThumbs = (e) => {
		setThumbIndex(e.item);
		setThumbAnimation(false);
	};

	return [
		<div>
			<RoundButton bgcolor="white" image={prev} onClick={slidePrev} />
		</div>,
		<AliceCarousel
			mouseTracking
			disableDotsControls
			disableButtonsControls
			items={thumbs}
			activeIndex={thumbIndex}
			responsive={responsive}
			onSlideChanged={syncThumbs}
		/>,
		<div>
			<RoundButton bgcolor="white" image={next} onClick={slideNext} />
		</div>,
	];
}
