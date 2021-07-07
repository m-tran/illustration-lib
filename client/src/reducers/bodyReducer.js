const initialState = {
	bodyKey: '',
};

export default function bodyReducer(state = initialState, action) {
	switch (action.type) {
		case 'SELECTED':
			return {
				...state,
				bodyKey: action.payload,
			};
		default:
			return state;
	}
}
