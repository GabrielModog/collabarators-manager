import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../components/Layout';

import StorageContext from '../context/context';

const AuthRouter = ({
	component: Component,
	authProtected,
	location,
	layout,
	...rest
}) => {
	const { token } = useContext(StorageContext);

	if (authProtected && !token) {
		return <Redirect to={{ pathname: '/login', state: { from: location } }} />;
	}

	return (
		<Layout layout={layout}>
			<Route {...rest} render={() => <Component {...rest} />} />
		</Layout>
	);
};

export default AuthRouter;
