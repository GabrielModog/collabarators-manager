import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Primary } from '../../styles/palette';

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
