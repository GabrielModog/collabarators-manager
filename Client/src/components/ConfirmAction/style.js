import styled from 'styled-components';

import { Warning, Danger, Grey } from '../../styles/palette';

export const ConfirmActionContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 200;
	width: 100%;
	height: 100%;
	background-color: ${Grey[400]};
`;

export const ActionBody = styled.div`
	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		h3 {
			font-weight: 300;
			margin: 0 5px;
		}
	}
`;
export const ConfirmActionTitle = styled.h1`
	font-weight: 300;
	font-size: 2.3rem;
	padding: 0;
`;
