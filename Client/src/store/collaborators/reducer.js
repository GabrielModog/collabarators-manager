import {
	LOAD_COLLABORATORS,
	LOAD_COLLABORATORS_SUCCESS,
} from '../../types/collaborators';

const INITIAL_STATE = {
	collaborators: [
		{
			id: '20932kk23ok',
			name: 'Fulano',
			lastname: 'Di tal',
			birthday: '21/04/1991',
			salary: 5000,
			role: {
				name: 'Desenvolvedor Pleno',
				slug: 'pleno',
			},
			roleId: '1',
		},
	],
};

const collaborators = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case LOAD_COLLABORATORS:
			return state;
		default:
			return state;
	}
};

export default collaborators;
