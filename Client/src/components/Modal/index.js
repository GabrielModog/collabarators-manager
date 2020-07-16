import React from 'react';

import { ModalContainer, ModalBody, ModalTitle } from './style';

const Modal = ({ open, title, children }) => {
	return (
		open && (
			<ModalContainer>
				<ModalBody>
					<ModalTitle>{title}</ModalTitle>
					{children}
				</ModalBody>
			</ModalContainer>
		)
	);
};

export default Modal;
