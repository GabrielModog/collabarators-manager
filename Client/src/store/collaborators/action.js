import {
	LOAD_COLLABORATORS,
	LOAD_COLLABORATORS_SUCCESS,
} from '../../types/collaborators';

const loadCollaborators = () => ({
	type: LOAD_COLLABORATORS,
});

const loadCollaboratorsSucces = data => ({
	type: LOAD_COLLABORATORS_SUCCESS,
	payload: data,
});
