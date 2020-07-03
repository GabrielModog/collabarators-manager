import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import App from './App';

import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

import StorageProvider from './context/provider';
import store from './store';

ReactDOM.render(
	<React.Fragment>
		<Provider store={store}>
			<StorageProvider>
				<GlobalStyle />
				<App />
				<ToastContainer position="top-center" autoClose={2000} />
			</StorageProvider>
		</Provider>
	</React.Fragment>,
	document.getElementById('root')
);
