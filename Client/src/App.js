import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AuthRouter from './router';
import { publicRoutes, authRoutes } from './router/routes';

const App = () => (
	<Router>
		<Switch>
			{publicRoutes.map(route => (
				<AuthRouter
					exact
					path={route.path}
					layout={false}
					component={route.component}
					key={route.path + 1}
				/>
			))}

			{authRoutes.map(route => (
				<AuthRouter
					exact
					layout
					authProtected
					path={route.path}
					component={route.component}
					key={route.path + 2}
				/>
			))}
		</Switch>
	</Router>
);

export default App;
