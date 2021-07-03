const initialState = {
	bodyUrl: '',
};

export default function bodyReducer(state = initialState, action) {
	switch (action.type) {
		case 'SELECTED':
			return {
				...state,
				bodyUrl: action.payload,
			};
		default:
			return state;
	}
}
