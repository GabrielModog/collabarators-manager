import React from 'react';
import { Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Collaborators from '../pages/Collaborators';
import Roles from '../pages/Roles';

const authRoutes = [
	{ path: '/', component: Home },
	{ path: '/colaborador', component: Collaborators },
	{ path: '/cargo', component: Roles },

	{ path: '/', exact: true, component: () => <Redirect to="/" /> },
];

export default authRoutes;
