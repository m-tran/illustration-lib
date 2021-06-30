import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';

// const handleDragStart = (e) => e.preventDefault();

// const headItems = [
// 	<img src="path-to-img" alt="" onDragStart={handleDragStart} />,
// 	<img src="path-to-img" alt="" onDragStart={handleDragStart} />,
// 	<img src="path-to-img" alt="" onDragStart={handleDragStart} />,
// ];

const headItems = [
    <div className="item" data-value="1">1</div>,
    <div className="item" data-value="2">2</div>,
    <div className="item" data-value="3">3</div>,
    <div className="item" data-value="4">4</div>,
    <div className="item" data-value="5">5</div>,
];

export default headItems;
