const initialState = {
	bottomKey: '',
};

export default function bottomReducer(state = initialState, action) {
	switch (action.type) {
		case 'SELECTED':
			return {
				...state,
				bottomKey: action.payload,
			};
		default:
			return state;
	}
}
