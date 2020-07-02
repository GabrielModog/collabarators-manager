import styled from 'styled-components';

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
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
