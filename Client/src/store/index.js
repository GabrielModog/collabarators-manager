import { createStore } from 'redux';

import collaborators from './collaborators/reducer';

const store = createStore(collaborators);

export default store;
