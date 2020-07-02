import styled from 'styled-components';
import { Button } from '../components/Form';

import { Grey, Primary, Success, Warning } from '../styles/palette';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 960px;

	h1 {
		margin: 10px;
		font-weight: 300;
		font-size: 1.6rem;
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	${props => (props.alignEnd ? 'align-items: flex-end;' : '')}
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

export const Sides = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 1rem;
	width: 100%;

	ul {
		list-style: none;
	}
`;

export const SendButton = styled(Button)`
	color: ${Grey[0]};
	background-color: ${Primary[200]};
	&:hover {
		color: ${Grey[400]};
		background-color: ${Primary[400]};
	}
	&:focus {
		color: ${Grey[400]};
		background-color: ${Primary[400]};
	}
`;

export const RegisterCollaborator = styled(Button)`
	color: ${Grey[0]};
	background-color: ${Success[200]};
	&:hover {
		color: ${Grey[400]};
		background-color: ${Primary[400]};
	}
	&:focus {
		color: ${Grey[400]};
		background-color: ${Primary[400]};
	}
`;

export const RegisterRole = styled(Button)`
	color: ${Grey[0]};
	background-color: ${Warning[200]};
	&:hover {
		color: ${Grey[400]};
		background-color: ${Primary[400]};
	}
	&:focus {
		color: ${Grey[400]};
		background-color: ${Primary[400]};
	}
`;
