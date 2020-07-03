import styled from 'styled-components';
import { Form, Button } from '../components/Form';

import { Grey, Primary, Success, Warning, Danger } from '../styles/palette';

export { Button } from '../components/Form';

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

export const LoginSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const LoginForm = styled(Form)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 40px;
`;

export const CollabItem = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color: white;
	box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	margin: 20px 0;
	// padding: 20px 25px;
	overflow: hidden;
	transition: 350ms;

	&:hover {
		transform: scale(1.01, 1.01);
		cursor: pointer;
	}

	div {
		display: flex;
		flex-direction: column;
		line-height: 2rem;
		padding: 10px 20px;
	}

	div.row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}

	div.tools {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0 1rem;
		background-color: ${Danger[0]};

		button {
			margin: 5px 0;
		}
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

export const EditButton = styled(Button)`
	display: flex;
	justify-content: center;
	align-items: center;

	padding: 0;
	width: 32px;
	height: 32px;
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

	i {
		font-size: 0.6rem;
		text-align: center;
	}
`;

export const DeleteButton = styled(Button)`
	display: flex;
	justify-content: center;
	align-items: center;

	padding: 0;
	width: 32px;
	height: 32px;
	color: ${Grey[500]};
	background-color: ${Danger[200]};
	&:hover {
		color: ${Grey[400]};
		background-color: ${Primary[400]};
	}
	&:focus {
		color: ${Grey[400]};
		background-color: ${Primary[400]};
	}

	i {
		font-size: 0.6rem;
		text-align: center;
	}
`;
export const LoginButton = styled(Button)`
	display: inline-block;
	width: 60%;
	font-size: 1.1rem;
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

export const Pagination = styled.div`
	display: flex;
	justify-content: center;
	margin: 20px 40px 40px 40px;
`;
