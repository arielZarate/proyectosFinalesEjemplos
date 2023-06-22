import { GET_DETAIL_PETS, FORM_SUCCESS } from "../ActionsTypes/actions_types";

const initialState = {
	detail: null,
	formData: [],
};

function pets_reducer(state = initialState, action) {
	switch (action.type) {
		case GET_DETAIL_PETS:
			return {
				...state,
				detail: action.payload,
			};
		case FORM_SUCCESS:
			return {
				...state,
				formData: action.payload,
			};

		default:
			return state;
	}
}

export default pets_reducer;
