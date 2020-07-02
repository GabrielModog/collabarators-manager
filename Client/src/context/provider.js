import React from 'react';
import Context from './context';
import { useStorage } from '../hooks';

const StoreProvider = ({ children }) => {
	const [token, setToken, removeToken] = useStorage('token');

	return (
		<Context.Provider value={{ token, setToken, removeToken }}>
			{children}
		</Context.Provider>
	);
};

export default StoreProvider;
