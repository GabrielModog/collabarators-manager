import { createGlobalStyle } from 'styled-components';
import { Grey } from './palette';

const GlobalStyle = createGlobalStyle`
	html, * {
		padding: 0;
		margin: 0;
  }
  
	body{
		display: flex;
		flex-direction: column;
		height: 100vh;
		font-weight: 300;
		font-family: 'Roboto', sans-serif;
		background-color: ${Grey[0]}
	}
`;

export default GlobalStyle;
