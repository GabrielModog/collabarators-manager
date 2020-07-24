import styled from 'styled-components';

import { Grey, Danger, Warning } from '../../styles/palette';

export const ModalContainer = styled.div`
	z-index: 200;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;

	color: white;

	transition: 350ms;
`;

export const ModalBody = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	background-color: ${Grey[600]};
	padding: 1rem;
	text-align: center;
	transition: 350ms;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);

	.modal-options {
		display: flex;
		justify-content: center;
		margin-top: 10px;
	}

	button {
		width: 100%;
		border: none;
		margin: 2px;
		padding: 0.8rem 2rem;
		font-size: 16px;
		border-radius: 4px;

		&:hover {
			opacity: 0.8;
		}

		&:focus {
			outline: none;
			opacity: 0.8;
		}

		&:nth-child(1) {
			background-color: ${Danger[200]};
			color: white;
		}
		&:nth-child(2) {
			background-color: ${Warning[200]};
			color: white;
		}
	}
`;

export const ModalTitle = styled.h1`
	font-size: 3.1rem;
	font-weight: 300;
`;
