const initialState = {
	imgUrl: '',
};

export default function imgReducer(state = initialState, action) {
	switch (action.type) {
		case 'SELECTED':
			return {
				...state,
				imgUrl: action.payload,
			};
		default:
			return state;
	}
}
