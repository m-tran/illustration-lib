const initialState = {
	headKey: '',
};

export default function headReducer(state = initialState, action) {
	switch (action.type) {
		case 'SELECTED':
			return {
				...state,
				headKey: action.payload,
			};
		default:
			return state;
	}
}
