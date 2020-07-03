import React from 'react';
import Navbar from '../Navbar';
import { HeaderContainer } from './style';

const Header = ({ layout }) => (
	<HeaderContainer>{layout ? <Navbar /> : ''}</HeaderContainer>
);

export default Header;
