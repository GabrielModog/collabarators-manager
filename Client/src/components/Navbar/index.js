import React from 'react';

import { Nav, NavItem } from './style';
import { Button } from '../Form';

const Navbar = () => {
	return (
		<Nav>
			<NavItem to="/">
				<h1>Collaborator</h1>
			</NavItem>

			<Button type="button">Sair</Button>
		</Nav>
	);
};

export default Navbar;
