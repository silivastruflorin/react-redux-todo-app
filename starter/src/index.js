import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>      {/* The store lays here so all the children inside will have access to the store */}
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
