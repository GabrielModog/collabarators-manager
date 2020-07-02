import React from 'react';

import { Nav, NavItem, LogoutButton } from './style';

const Navbar = () => {
	return (
		<Nav>
			<NavItem to="/">
				<h1>Collaborator</h1>
			</NavItem>

			<LogoutButton type="button">Sair</LogoutButton>
		</Nav>
	);
};

export default Navbar;
