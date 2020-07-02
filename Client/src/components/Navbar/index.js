import React from 'react';

import { Nav, NavItem } from './style';

const Navbar = () => {
	return (
		<Nav>
			<NavItem>
				<h1>Collaborator</h1>
			</NavItem>
			<NavItem>
				<button type="button">Sair</button>
			</NavItem>
		</Nav>
	);
};

export default Navbar;
