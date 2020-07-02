import React from 'react';
import Header from '../Header';
import { MainLayout, Main } from './style';

export default ({ layout, children }) => (
	<MainLayout>
		<Header layout={layout} />
		<Main>{children}</Main>
	</MainLayout>
);
