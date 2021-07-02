const initialState = {
	headUrl: '',
};

export default function headReducer(state = initialState, action) {
	switch (action.type) {
		case 'SELECTED':
			return {
				...state,
				headUrl: action.payload,
			};
		default:
			return state;
	}
}
