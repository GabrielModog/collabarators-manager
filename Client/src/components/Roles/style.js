import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grey } from '../../styles/palette';

export const RoleContainer = styled.div`
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
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 20px 0;
		padding: 10px 10px 10px 20px;
		border-radius: 5px;
		text-align: center;
		font-weight: 400;
		color: ${Grey[600]};
		background-color: ${Grey[0]};
		transition: 250ms;
		cursor: pointer;

		&:hover {
			color: ${Grey[500]};
			background-color: ${Grey[400]};
		}
	}
`;

export const RoleItem = styled(Link)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 20px 0;
	padding: 10px 10px 10px 20px;
	border-radius: 5px;
	text-align: center;
	font-weight: 400;
	color: ${Grey[600]};
	background-color: ${Grey[0]};
	text-decoration: none;
	transition: 250ms;
	cursor: pointer;

	&:hover {
		color: ${Grey[500]};
		background-color: ${Grey[400]};
	}
`;
