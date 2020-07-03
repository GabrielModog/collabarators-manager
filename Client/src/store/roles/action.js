import { LOAD_ROLES } from '../../types/roles';

import api from '../../services';

export const loadRoles = () => dispatch => {
	api.get('/roles').then(res =>
		dispatch({
			type: LOAD_ROLES,
			payload: res.data,
		})
	);
};
