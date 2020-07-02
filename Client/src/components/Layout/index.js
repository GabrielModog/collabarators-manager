import React from 'react';
import Header from '../Header';
import { MainLayout, Main } from './style';

export default ({ children }) => (
	<MainLayout>
		<Header />
		<Main>{children}</Main>
	</MainLayout>
);
