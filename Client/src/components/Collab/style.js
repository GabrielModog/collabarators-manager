import styled from 'styled-components';
import { Button } from '../../components/Form';

import { Grey, Primary, Warning, Danger } from '../../styles/palette';

export { Button } from '../../components/Form';

export const Item = styled.div`
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
	position: relative;

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
		position: relative;

		button {
			margin: 5px 0;
		}
	}

	strong {
		font-weight: 400;
		color: ${Primary[200]};
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

export const Pagination = styled.div`
	display: flex;
	justify-content: center;
	margin: 20px 40px 40px 40px;
`;
