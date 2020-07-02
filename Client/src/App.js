import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AuthRouter from './router';
import authRoutes from './router/routes';

const App = () => (
	<Router>
		<Switch>
			{authRoutes.map(route => (
				<AuthRouter
					exact
					path={route.path}
					layout
					component={route.component}
					key={route.path + 2}
				/>
			))}
		</Switch>
	</Router>
);

export default App;
