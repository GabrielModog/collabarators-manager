import {
	LOAD_COLLABORATORS,
	LOAD_COLLABORATORS_SUCCESS,
} from '../../types/collaborators';

const INITIAL_STATE = {
	collaborators: [],
	loading: false,
};

const collaborators = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case LOAD_COLLABORATORS:
			return {
				...state,
				collaborators: [...payload],
				loading: true,
			};
		default:
			return state;
	}
};

export default collaborators;
