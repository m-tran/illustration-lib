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
	const [activeIndex, setActiveIndex] = useState(0);
	// const [items] = useState(createItems(5, [setActiveIndex]));
	const Arr = { items };

	const slidePrev = () => {
		if (activeIndex > 0) {
			setActiveIndex(activeIndex - 1);
		}
	};
	const slideNext = () => {
		if (activeIndex < (Arr.items.length - 3)) {
			setActiveIndex(activeIndex + 1);
		}
	};
	const syncActiveIndex = ({ item }) => setActiveIndex(item);

	return [
		<div>
			<RoundButton bgcolor="white" image={prev} onClick={slidePrev} />
		</div>,
		<AliceCarousel
			mouseTracking
			disableDotsControls
			disableButtonsControls
			items={items}
			activeIndex={activeIndex}
			responsive={responsive}
			onSlideChanged={syncActiveIndex}
		/>,
		<div>
			<RoundButton bgcolor="white" image={next} onClick={slideNext} />
		</div>,
	];
}
