import { LOAD_COLLABORATORS } from '../../types/collaborators';

import api from '../../services';

export const loadCollaborators = pagination => dispatch => {
	api.get(`/collaborators?_page=${pagination}&_limit=3`).then(res =>
		dispatch({
			type: LOAD_COLLABORATORS,
			payload: res.data,
		})
	);
};
