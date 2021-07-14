import React from 'react';

import BlackHalf from '../Card/BlackHalf';
import WhiteHalf from '../Card/WhiteHalf';

import landing from '../../images/landing_v2.gif';

import '../../App.css';

export default function Landing() {
	return (
		<div className="container">
			<BlackHalf image={landing} alt="intro" />
			<WhiteHalf />
		</div>
	);
}
