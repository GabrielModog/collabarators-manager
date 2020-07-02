import React from 'react';
import { Redirect } from 'react-router-dom';

import Login from '../pages/Login';

import Home from '../pages/Home';
import Collaborators from '../pages/Collaborators';
import Roles from '../pages/Roles';

const authRoutes = [
	{ path: '/', component: Home },
	{ path: '/colaborador', component: Collaborators },
	{ path: '/colaborador/:id', component: Collaborators },
	{ path: '/cargo', component: Roles },
	{ path: '/cargo/:id', component: Roles },

	{ path: '/', exact: true, component: () => <Redirect to="/" /> },
];

const publicRoutes = [{ path: '/login', component: Login }];

export { publicRoutes, authRoutes };
