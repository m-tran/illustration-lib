const initialState = {
	bottomUrl: '',
};

export default function bottomReducer(state = initialState, action) {
	switch (action.type) {
		case 'SELECTED':
			return {
				...state,
				bottomUrl: action.payload,
			};
		default:
			return state;
	}
}
