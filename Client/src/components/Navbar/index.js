import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Nav, NavItem, LogoutButton } from './style';

import StorageContext from '../../context/context';

const Navbar = () => {
	const history = useHistory();
	const { removeToken } = useContext(StorageContext);

	const logoutHandler = () => {
		removeToken();
		toast.warn('Usuário deslogado!');
		history.push('/');
	};
	return (
		<Nav>
			<NavItem to="/">
				<h1>Collaborator</h1>
			</NavItem>

			<LogoutButton type="button" onClick={logoutHandler}>
				Sair
			</LogoutButton>
		</Nav>
	);
};

export default Navbar;
