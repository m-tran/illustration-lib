import 'react-alice-carousel/lib/alice-carousel.css';

import pants from '../../svg/bottom/pants_thumb.svg';
import shorts from '../../svg/bottom/shorts_thumb.svg';
import miniskirt from '../../svg/bottom/skirt_thumb.svg';
import maxi from '../../svg/bottom/maxi_thumb.svg';

// const bottomItems = [
// 	pants,
// 	shorts,
// 	miniskirt,
// 	maxi,
// ];

const bottomItems = {
	"pants": {
		"url": pants,
		"key": "pants",
		"alt": "pants",
	},
	"shorts": {
		"url": shorts,
		"key": "shorts",
		"alt": "shorts",
	},
	"miniskirt": {
		"url": miniskirt,
		"key": "miniskirt",
		"alt": "miniskirt",
	},
	"maxi": {
		"url": maxi,
		"key": "maxi",
		"alt": "maxi",
	},
}

export default bottomItems;
