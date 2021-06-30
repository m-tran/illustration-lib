import React from 'react';

import SelectorCard from './SelectorCard';
import headItems from '../Arrays/HeadItems';

import './Selector.css';

export default function Selector() {
  return (
	<div className="Selector">
		<SelectorCard title="HEAD" items={headItems} />
		<SelectorCard title="BODY" items={headItems} />
		<SelectorCard title="LEGS" items={headItems} />
	</div>
  );
}
