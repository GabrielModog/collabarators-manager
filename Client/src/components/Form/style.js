import styled from 'styled-components';
import { Form } from '@unform/web';
import InputRef from './Input/input';

import { Grey, Warning } from '../../styles/palette';

export const CollabForm = styled(Form)`
	width: 500px;
`;

export const CollabInput = styled(InputRef)`
	padding: 1rem 2rem;
	width: 100%;
	margin: 5px;
	border-radius: 5px;
	border: none;
	box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
	font-size: 0.9rem;
`;

export const Button = styled.button`
	border: none;
	cursor: pointer;
	font-size: 0.8rem;
	font-weight: bold;
	color: ${Warning[0]};
	background-color: ${Grey[400]};
	padding: 0 1rem;
	height: 52px;
	border-radius: 5px;
	box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
	margin: 5px;
	transition: 320ms;

	&:hover {
		background-color: ${Grey[200]};
	}
`;
