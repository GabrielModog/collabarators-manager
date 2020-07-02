import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../Form';
import { Primary, Grey, Danger } from '../../styles/palette';

export const Nav = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	max-width: 960px;
	width: 100%;
`;

export const NavItem = styled(Link)`
	text-decoration: none;
	color: ${Primary[400]};
`;

export const LogoutButton = styled(Button)`
	color: ${Grey[0]};
	background-color: ${Danger[200]};
	&:hover {
		color: ${Grey[400]};
		background-color: ${Danger[400]};
	}
	&:focus {
		color: ${Grey[400]};
		background-color: ${Danger[400]};
	}
`;
