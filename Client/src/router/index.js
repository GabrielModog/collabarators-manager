import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../components/Layout';

const AuthRouter = ({
	component: Component,
	authProtected,
	location,
	layout,
	...rest
}) => {
	if (authProtected) {
		return <Redirect to={{ pathname: '/', state: { from: location } }} />;
	}

	return (
		<Layout layout={layout}>
			<Route {...rest} render={() => <Component {...rest} />} />
		</Layout>
	);
};

export default AuthRouter;
