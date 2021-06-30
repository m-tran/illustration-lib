import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';

import hijab from '../../images/heads/Hijab.png';
import shortWavy from '../../images/heads/Short-Wavy.png';
import sidePartTwo from '../../images/heads/Side-Part-02.png';

const handleDragStart = (e) => e.preventDefault();

const headItems = [
	<img src={hijab} alt="" onDragStart={handleDragStart} />,
	<img src={shortWavy} alt="" onDragStart={handleDragStart} />,
	<img src={sidePartTwo} alt="" onDragStart={handleDragStart} />,
	<div className="item" data-value="4">4</div>,
	<div className="item" data-value="5">5</div>,
];

// const headItems = [
//     <div className="item" data-value="1">1</div>,
//     <div className="item" data-value="2">2</div>,
//     <div className="item" data-value="3">3</div>,
//     <div className="item" data-value="4">4</div>,
//     <div className="item" data-value="5">5</div>,
// ];

export default headItems;
