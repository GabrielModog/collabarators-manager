import {
	LOAD_COLLABORATORS,
	REMOVE_COLLABORATOR,
} from '../../types/collaborators';

import { api } from '../../services';

export const loadCollaborators = pagination => dispatch => {
	api.get(`/collaborators?_page=${pagination}&_limit=3`).then(res =>
		dispatch({
			type: LOAD_COLLABORATORS,
			payload: res.data,
		})
	);
};

export const removeCollaborator = id => dispatch => {
	api.delete(`/collaborators/${id}`).then(res => {
		dispatch({
			type: REMOVE_COLLABORATOR,
			payload: { id },
		});
	});
};
