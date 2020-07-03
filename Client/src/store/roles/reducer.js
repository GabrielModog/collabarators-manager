import { LOAD_ROLES } from '../../types/roles';

const INITIAL_STATE = {
	roles: [],
	loading: false,
};

const roles = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case LOAD_ROLES:
			return {
				...state,
				roles: [...payload],
				loading: false,
			};
		default:
			return state;
	}
};

export default roles;
