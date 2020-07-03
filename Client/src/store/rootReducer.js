import { combineReducers } from 'redux';

import collaborators from './collaborators/reducer';
import roles from './roles/reducer';

export default combineReducers({
	collaborators,
	roles,
});
