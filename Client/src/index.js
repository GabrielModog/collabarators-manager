import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';

import App from './App';

import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

import StorageProvider from './context/provider';

ReactDOM.render(
	<React.Fragment>
		<StorageProvider>
			<GlobalStyle />
			<App />
			<ToastContainer position="top-center" autoClose={2000} />
		</StorageProvider>
	</React.Fragment>,
	document.getElementById('root')
);
