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
`;

export const RoleSide = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
	box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	margin: 20px 0;
	padding: 20px 50px;

	ul {
		list-style: none;
	}

	li {
		margin: 20px 0;
		padding: 10px 5px;
		border-radius: 5px;
		width: 200px;
		font-weight: 400;
	}
`;

export const CollabItem = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color: white;
	box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	margin: 20px 0;
	padding: 20px 25px;
	overflow: hidden;

	div {
		display: flex;
		flex-direction: column;
		line-height: 2rem;
	}

	strong {
		font-weight: 400;
		color: ${Primary[200]};
	}
`;

export const SendButton = styled(Button)`
	color: ${Grey[500]};
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
	color: ${Grey[500]};
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
	color: ${Grey[500]};
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
