import React from 'react';

import Button from '../Button';

export default function WindowCard({
	title, body, bgcolor, color, link, text,
}) {
	return (
		<div>
			<div>
				{title}
			</div>
			<div>
				{body}
				<Button bgcolor={bgcolor} color={color} link={link} text={text} />
			</div>
		</div>
	);
}
