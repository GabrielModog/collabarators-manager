import React from 'react';

import { ConfirmActionContainer, ActionBody } from './style';

const ConfirmAction = ({ show, children }) => {
	return (
		show && (
			<ConfirmActionContainer>
				<ActionBody>{children}</ActionBody>
			</ConfirmActionContainer>
		)
	);
};

export default ConfirmAction;
