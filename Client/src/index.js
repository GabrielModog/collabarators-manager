import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';

import App from './App';

import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
		<ToastContainer position="top-center" autoClose={2000} />
	</React.StrictMode>,
	document.getElementById('root')
);
