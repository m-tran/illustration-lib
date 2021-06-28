import React from 'react';

import BlackHalf from '../Card/BlackHalf';
import WhiteHalf from '../Card/WhiteHalf';

import temp from '../../images/temp.png';

import '../../App.css';

export default function Landing() {
  return (
	<div className="Landing">
		<BlackHalf image={temp} alt="intro" />
		<WhiteHalf />
	</div>
  );
}
